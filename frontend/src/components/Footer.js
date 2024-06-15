import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#C4A484',
    color: '#282c34',
    padding: '10px 0',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 1000 // Ensure the footer is above other content
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/">Home</a></li>
          <li className="list-inline-item"><a href="/about">About</a></li>
          <li className="list-inline-item"><a href="/services">Services</a></li>
          <li className="list-inline-item"><a href="/contact">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
        </div>
        <p>&copy; 2024 Four Pillars Development. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
