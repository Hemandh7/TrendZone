import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/navbar';
import ProductPage from './Components/ProductPage';
import Footer from './Components/footer';
import SingleProduct from './Components/SingleProduct';
import Cart from './pages/Cart';
import LoginSignup from './pages/Login';
import CheckoutPage from './pages/Checkout';
import Admin from './pages/admin';

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
        <Route path="Login" element={<LoginSignup/>}></Route>
        <Route path="/checkout" element={<CheckoutPage/>}></Route>
        <Route path="Login/admin" element={<Admin/>}></Route>
      </Routes>
</BrowserRouter>
  );
}

export default App;
