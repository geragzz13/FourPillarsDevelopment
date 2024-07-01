import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Navbar.css'; // Import custom Navbar CSS
import logo from '../assets/images/logo.png'; // Corrected path

const CustomNavbar = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scroll animation
    });
  };

  return (
    <Navbar expand="lg" variant="light" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img
            src={logo}
            className="navbar-brand img"
            alt="Four Pillars Icon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="nav-link" onClick={scrollToTop}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="nav-link" onClick={scrollToTop}>
              PORTFOLIO
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="nav-link" onClick={scrollToTop}>
              ABOUT US
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="nav-link" onClick={scrollToTop}>
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
