import React, { useState } from 'react';
import "../CSS/navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          <a href="#">Categories</a>
          {isOpen && (
            <div className="dropdown-content">
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Children</a>
              <a href="#">Accessories</a>
            </div>
          )}
        </div>
      </div>
      <div className="right-items">
          <a href="#">cart</a>
          <a href="#">login</a>
      </div>
    </nav>
  );
};

export default Navbar;



