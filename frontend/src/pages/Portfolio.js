import React, { useState } from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'; // Ensure Carousel is imported from react-bootstrap
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css';
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';

const properties = [
    { id: 1, name: 'Sugar Mill Estate', imgSrc: SugarMillEstateImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 2, name: 'Dawson Estates', imgSrc: DawsonEstatesImage, location: 'Mercedes, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 3, name: 'El Dorado Subdivision', imgSrc: ElDoradoImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    // Add more properties as needed
];

const Portfolio = () => {
    const [selectedProperty, setSelectedProperty] = useState(properties[0]);

    const handleSelectProperty = (selectedIndex, e) => {
        setSelectedProperty(properties[selectedIndex]);
    };

    return (
        <div className="portfolio-container">
            <Container>
                <Row>
                    <Col md={12}>
                        <Carousel 
                            interval={null} 
                            indicators={true} 
                            controls={true} 
                            className="property-carousel"
                            onSelect={handleSelectProperty}
                        >
                            {properties.map((property, index) => (
                                <Carousel.Item key={property.id}>
                                    <Card className="property-card">
                                        <Row noGutters>
                                            <Col md={6}>
                                                <Card.Img variant="top" src={property.imgSrc} className="property-card-img" />
                                            </Col>
                                            <Col md={6}>
                                                <Card.Body>
                                                    <Card.Title>{property.name}</Card.Title>
                                                    <Card.Text><strong>Location:</strong> {property.location}</Card.Text>
                                                    <Card.Text>{property.description}</Card.Text>
                                                    <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;
