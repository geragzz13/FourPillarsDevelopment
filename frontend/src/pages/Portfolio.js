// src/pages/Portfolio.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import necessary Bootstrap components
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css'; // Import your custom CSS for Portfolio page
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png'; // Corrected path
const Portfolio = () => {
    // Dummy data for properties (replace with actual data)
    const properties = [
        { id: 1, name: 'Sugar Mill Estate', imgSrc: SugarMillEstateImage, location: 'Edinburg, TX' },
        { id: 2, name: 'Property Two', imgSrc: '/property-2.jpg', location: 'Los Angeles, CA' },
        { id: 3, name: 'Property Three', imgSrc: '/property-3.jpg', location: 'Chicago, IL' },
        // Add more properties as needed
    ];

    return (
        <div className="portfolio-container">
            <Container>
                <Row>
                    {properties.map(property => (
                        <Col key={property.id} md={4} className="mb-4">
                            <Card className="property-card">
                                <Card.Img variant="top" src={property.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{property.name}</Card.Title>
                                    <Card.Text>{property.location}</Card.Text>
                                    <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;
