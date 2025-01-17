import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Navbar.css'; 
import logo from '../assets/images/logo.png'; 

const CustomNavbar = () => {
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    // Function to handle hover (show dropdown)
    const handleMouseEnter = (id) => {
        if (timeoutId) {
            clearTimeout(timeoutId); // Clear the timeout if the mouse enters before it closes
        }
        setShowDropdown(id);
    };

    // Function to handle hover leave (close dropdown with delay)
    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => setShowDropdown(null), 500); // Delay of 500ms
        setTimeoutId(newTimeoutId);
    };

    // Check if the current route is active
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar expand="lg" className="custom-navbar fixed-top">
            <Container fluid className="navbar-container">
                {/* Logo Section */}
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    <img src={logo} className="navbar-logo" alt="Brownstone Logo" />
                </Navbar.Brand>

                {/* Navbar Toggle for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links Section */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-links">
                        {/* Home Link - Clickable and Wider */}
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className={`nav-link home-link ${isActive('/') ? 'active' : ''}`}>
                            HOME
                        </Nav.Link>

                        {/* About Us Dropdown */}
                        <NavDropdown
                            title="ABOUT US"
                            id="about-dropdown"
                            className="nav-item"
                            show={showDropdown === 'about'}
                            onMouseEnter={() => handleMouseEnter('about')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavDropdown.Item as={Link} to="/our-mission">OUR MISSION & HISTORY</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/company-culture">COMPANY CULTURE</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/executive-team">EXECUTIVE TEAM</NavDropdown.Item>
                        </NavDropdown>

                        {/* Developments Dropdown */}
                        <NavDropdown
                            title="DEVELOPMENTS"
                            id="developments-dropdown"
                            className="nav-item"
                            show={showDropdown === 'developments'}
                            onMouseEnter={() => handleMouseEnter('developments')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavDropdown.Item as={Link} to="/under-construction">UNDER CONSTRUCTION</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/featured-properties">FEATURED PROPERTIES</NavDropdown.Item>
                        </NavDropdown>

                        {/* Contact Us Dropdown */}
                        <NavDropdown
                            title="CONTACT US"
                            id="contact-dropdown"
                            className="nav-item"
                            show={showDropdown === 'contact'}
                            onMouseEnter={() => handleMouseEnter('contact')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavDropdown.Item as={Link} to="/contact-us">CONTACT US NOW</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/bid-our-work">BID OUR WORK</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/office-locations">OFFICE LOCATIONS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
