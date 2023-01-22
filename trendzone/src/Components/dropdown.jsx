import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from "../Images/logo.png";
import { FaSearch } from 'react-icons/fa';
import { FaShoppingBag,FaUserAlt } from 'react-icons/fa';
import '../CSS/dropdown.css';
import Products from '../pages/products';




const sections = [
    { name: 'NEW!', items: ['New Arrivals','New Releases','New Brands','New Deals','New in Beauty'] },
    { name: 'WOMEN', items:['Clothing','Shoes','Accessories','Handbags','Jewelry']},
    { name: 'MEN', items: ['Clothing','Shoes','Accessories','Bags','Watches'] },
    { name: 'KIDS', items: ['Boys','Girls','Baby','Toddler','Shoes','Accessories','School Uniforms'] },
    { name: 'OUTERWEAR', items: ['Coats','Jackets','Vests','Rainwear','Fleece','Down','Outerwear Accessories','Sale'] },
    { name: 'GEAR', items: ['Camping & Hiking','Cycling','Fitness','Outdoor','Running','Travel','Yoga'] },
    { name: 'FOOTWEAR', items: ['Women','Men','Kids','Outdoor','Running','Sandals','Slippers'] },
    { name: 'HOME', items: ['Bed & Bath','Furniture','Kitchen','Decor','Lighting','Rugs','Storage'] },
    { name: 'SALE', items: ['Womens Sale','Mens Sale','Kids Sale','Outerwear Sale','Gear Sale','Footwear Sale','Home Sale','Clearance'] },
    { name: 'CLEARANCE', items: ['Sale', 'Discounts', 'Clearance Items', 'Last Chance'] },
];

export const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    return (
        <>
        <div className='navTop'>
            <div className='nav-srch'>
                <input type="text" />
                <button className='sea'><FaSearch/></button>
                 
            </div>
            <NavLink to="/"><div className='logo'>
            <img src={image} alt="" />
            </div></NavLink>
            <div className='crt'><NavLink to="cart"><FaShoppingBag/></NavLink><p>Cart</p></div>
            
        </div>
        <div className='nav-log'>
            <div className='reward'><img src="https://www.eddiebauer.com/static/ar-logo/ar-logo-small.png" alt="" /><p>Earn Rewards OnPurchases</p></div>
            <div className='eos'>END OF SEASON SALE - UP TO 60% OFF
VIEW ALL OFFERS
</div>
<NavLink to="Login"><div className='nav-login'><FaUserAlt/><p>Login</p>/<p>SignUP</p></div></NavLink>

        </div>
        <div className="dropdown-navbar-wrapper">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="dropdown-section"
                    onMouseEnter={() => setDropdownOpen(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                >
                    <h5>{section.name}</h5>
                    {dropdownOpen === index && (
                        <div className="dropdown-section-items" >
                            {section.items.map((item, i) => (
                                <NavLink style={{ textDecoration: 'none'}} to="products"><div  key={i}>{item}</div></NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        </>
);
};