import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/youruserid"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Stack Overflow
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
