import React, { useState, useEffect } from 'react';
import '../CSS/SingleProduct.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SingleProduct = () => {
  const [product, setProduct] = useState({});
const id=sessionStorage.getItem('productId')
useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://63c6d562d307b76967421abd.mockapi.io/products/${id}`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="product-container">
      <h1 className="product-name">{product.name}</h1>
      <img className="product-image" src={product.image} alt={product.name} />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
    </div>
  );
}

export default SingleProduct;
