import React, { useState } from 'react';
import './Navbar.css'; 
import logo from './logo.png'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleHamburger}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#classes-section">Classes</a></li>
        <li><a href="#trainers-section">Trainer</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#contact-info">Contact</a></li>
        <li><a href="#join" className="join-btn">JOIN US</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
