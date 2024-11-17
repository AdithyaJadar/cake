// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cake-categories">Cake Categories</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/testimonials">Customer Testimonials</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;