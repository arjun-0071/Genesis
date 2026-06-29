import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`navbar ${location.pathname === '/' ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="logo-text">Genesis</span>
        </Link>
      </div>
      
      <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li className={location.pathname === '/products' ? 'active' : ''}><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li className={`nav-item-dropdown ${location.pathname.startsWith('/blogs') ? 'active' : ''}`}>
            <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
            <div className="dropdown-menu">
              <Link to="/blogs" onClick={() => setIsOpen(false)}>All Blogs</Link>
              <Link to="/blogs/hair-care" onClick={() => setIsOpen(false)}>Hair Care</Link>
              <Link to="/blogs/skin-care" onClick={() => setIsOpen(false)}>Skin Care</Link>
              <Link to="/blogs/nails-care" onClick={() => setIsOpen(false)}>Nails Care</Link>
            </div>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-actions">
        <button className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
