import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>About Us</h4>
            <p>Company information, vision, and mission.</p>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com<br />Phone: +123 456 7890</p>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <p>Stay connected on social media.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
