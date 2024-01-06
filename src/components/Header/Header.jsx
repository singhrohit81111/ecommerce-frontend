import React from 'react';
import { Link } from "react-router-dom";
import { CartButton } from '../CartButton';
import './Header.css';

const Header = () => {
  return (
    <header className="shopito-header">
      <div className="shopito-logo"><Link to='/'>Shopito</Link></div>
      <nav className="shopito-nav">
        <Link to="/products/men">Men</Link>
        <Link to="/products/women">Women</Link>
        <Link to="/products/kids">Kids</Link>
        <Link to="/products">Brands</Link>
      </nav>
      <div className="shopito-search">
        <input type="text" placeholder="Search for products" />
        <button>Search</button>
      </div>
      <div className="shopito-user-actions">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
        <Link to="/cart"><CartButton/></Link>
      </div>
    </header>
  );
};

export default Header;
