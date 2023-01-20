import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/productpage.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const nav=useNavigate();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('asc'); // state variable to keep track of sort order
  const [filterBy, setFilterBy] = useState({}); // state variable to keep track of filter options
 
  useEffect(() => {
    axios.get('https://63c6d562d307b76967421abd.mockapi.io/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSort = () => {
    if (sortBy === 'asc') {
      setSortBy('desc');
      setProducts(products.sort((a, b) => a.price - b.price));
    } else {
      setSortBy('asc');
      setProducts(products.sort((a, b) => b.price - a.price));
    }
  }
  
  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilterBy({...filterBy, [name]: value});
  }

  const filteredProducts = products.filter(product => {
    if (filterBy.minPrice && product.price < filterBy.minPrice) {
      return false;
    }
    if (filterBy.maxPrice && product.price > filterBy.maxPrice) {
      return false;
    }
    if (filterBy.category && product.category !== filterBy.category) {
      return false;
    }
    return true;
  });

  const handleProductClick = (product) => {
   console.log(product);
   sessionStorage.setItem('productId', product);
   nav(`/products/${product}`)
  }

  return (
    <div >
      <h2>Products</h2>
      <hr />
      <div className='products-wrapper'>
      <div>
        <label>Min Price:</label><br />
        <input type="number" name="minPrice" onChange={handleFilter} /><br />
        <label>Max Price:</label><br />
        <input type="number" name="maxPrice" onChange={handleFilter} /><br />
        <label>Category:</label><br />
        <select name="category" onChange={handleFilter}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="Kids">Kids</option>
        </select><br /><br /><br />
        <button onClick={handleSort}>Sort by Price</button>
      </div>
      
      <div className='product-container'>
      {filteredProducts.map(product => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}>
          <img src={product.image}/>
          <h4>{product.name}</h4>
          <h4 className='pro'>${product.price}</h4>
          </div>
       ))}
      </div>
      
      </div>
    </div>
  );
}

export default ProductPage;
