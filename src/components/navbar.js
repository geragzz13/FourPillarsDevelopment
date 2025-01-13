import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Navbar.css'; 
import logo from '../assets/images/logo.png'; 

const CustomNavbar = () => {
    const location = useLocation();
    
    const [showDropdown, setShowDropdown] = useState(null);

    // Function to handle hover
    const handleMouseEnter = (id) => {
        setShowDropdown(id);
    };

    const handleMouseLeave = () => {
        setShowDropdown(null);
    };

    // Function to determine active link
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar expand="lg" className="custom-navbar fixed-top">
            <Container fluid className="navbar-container">
                {/* Logo Section (Far Left) */}
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    <img src={logo} className="navbar-logo" alt="Brownstone Logo" />
                </Navbar.Brand>

                {/* Navbar Toggle for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links Section Wrapped in a Single Box with Border */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <div className="navbar-box">
                        <Nav className="navbar-links">
                            <NavDropdown
                                title="HOME"
                                id="home-dropdown"
                                className={`nav-item ${isActive('/home') ? 'active' : ''}`}
                                show={showDropdown === 'home'}
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavDropdown.Item as={Link} to="/home">Main Home</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="ABOUT US"
                                id="about-dropdown"
                                className={`nav-item ${isActive('/about-us') ? 'active' : ''}`}
                                show={showDropdown === 'about'}
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavDropdown.Item as={Link} to="/about-company">OUR MISSION & HISTORY</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/our-team">COMPANY CULTURE</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/our-team">EXECUTIVE TEAM</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="DEVELOPMENTS"
                                id="developments-dropdown"
                                className={`nav-item ${isActive('/developments') ? 'active' : ''}`}
                                show={showDropdown === 'developments'}
                                onMouseEnter={() => handleMouseEnter('developments')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavDropdown.Item as={Link} to="/residential">UNDER CONSTRUCTION</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/commercial">FEATURED PROPERTIES</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="CONTACT US"
                                id="contact-dropdown"
                                className={`nav-item ${isActive('/contact-us') ? 'active' : ''}`}
                                show={showDropdown === 'contact'}
                                onMouseEnter={() => handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavDropdown.Item as={Link} to="/contact">CONTACT US NOW</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/locations">BID OUR WORK</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/locations">OFFICE LOCATIONS</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
