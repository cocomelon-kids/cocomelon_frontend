import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Cocomelon Pre-School and Day Care" className="navbar-logo" />
        <div className="company-title">
          <h1 className="company-name">
            <span className="coco">Cocomelon</span>
          </h1>
          <p className="subtitle">Pre-School & Day Care</p>
        </div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/curriculum" onClick={closeMenu}>Curriculum</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
        </li>
        <li>
          <Link to="/fee" onClick={closeMenu}>Fee</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
      <Link to="/enroll-now" className="enroll-btn" onClick={closeMenu}>Enroll Now</Link>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
