import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Bag<span>Crafters</span>
        </Link>

        <div className="navbar-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">School Bags</Link>
          <Link to="/travel" className="nav-link">Travel Bags</Link>
          <Link to="/about" className="nav-link">About Us</Link>
        </div>

        <div className="navbar-icons">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><User size={20} /></button>
          <button className="icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
          <button 
            className="icon-btn mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>School Bags</Link>
        <Link to="/travel" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Travel Bags</Link>
        <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
