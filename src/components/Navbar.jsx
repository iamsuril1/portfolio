import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <h2>MyPortfolio</h2>
      </div>

      {/* Hamburger menu icon on mobile */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${isMobile ? "active" : ""}`}></div>
        <div className={`line ${isMobile ? "active" : ""}`}></div>
        <div className={`line ${isMobile ? "active" : ""}`}></div>
      </div>

      {/* Centered links */}
      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
        <li><Link to="/skills-education" className="nav-link">Skills & Education</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
