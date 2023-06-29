import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import './ssss.css';


function Navv() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">
          Logo
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars/>
        </button>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="/" className="navbar-item">
          Home
        </a>
        <a href="/about" className="navbar-item">
          About
        </a>
        <a href="/services" className="navbar-item">
          Services
        </a>
        <a href="/contact" className="navbar-item">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navv