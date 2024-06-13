import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-light text-center">
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
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
