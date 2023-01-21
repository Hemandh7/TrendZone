import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/navbar';
import ProductPage from './Components/ProductPage';
import Footer from './Components/footer';
import SingleProduct from './Components/SingleProduct';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductPage/>} />
        <Route path="products/:id" element={<SingleProduct/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
</BrowserRouter>
  );
}

export default App;
