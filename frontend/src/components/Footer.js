import React, { useEffect, useState } from 'react';
import '../assets/styles/Footer.css';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi'; // Importing icons from Boxicons
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'; // Importing icons from Font Awesome

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + windowHeight;
      const scrollTrigger = documentHeight - windowHeight * 0.1; // Adjusted scroll trigger to activate earlier

      setShowFooter(scrollPosition >= scrollTrigger);
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);
    
    // Initial check on mount
    handleScroll();

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/"><FaHome /> Home</a></li>
          <li className="list-inline-item"><a href="/about-us"><FaUser /> About</a></li>
          <li className="list-inline-item"><a href="/portfolio"><FaBriefcase /> Portfolio</a></li>
          <li className="list-inline-item"><a href="/contact-us"><FaEnvelope /> Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://www.facebook.com/emmanuel.perez.775?mibextid=LQQJ4d"><BiLogoFacebook /></a> {/* Placeholder Facebook link */}
          <a href="https://www.twitter.com"><BiLogoTwitter /></a> {/* Placeholder Twitter link */}
          <a href="https://www.linkedin.com"><BiLogoLinkedin /></a> {/* Placeholder LinkedIn link */}
          <a href="https://www.instagram.com/fourpillarsdevelopment/"><BiLogoInstagram /></a> {/* Actual Instagram link */}
        </div>
        <p>&copy; 2024 Four Pillars Development</p>
      </div>
    </footer>
  );
};

export default Footer;
