import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                                <div key={i}><NavLink to="products">{item}</NavLink></div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
);
};