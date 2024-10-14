import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Carousel, Button, Row, Col } from 'react-bootstrap';
import '../assets/styles/PropertyDetail.css';
import Footer from '../components/Footer';
import PropertyHero from '../components/PropertyHero';

// Import images
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';
import ElDorado1 from '../assets/images/ElDorado1.png';
import ElDorado2 from '../assets/images/ElDorado2.png';
import ElDorado3 from '../assets/images/ElDorado3.png';
import ElDorado4 from '../assets/images/ElDorado4.png';
import ElDorado5 from '../assets/images/ElDorado5.png';

// Property data
const properties = [
    {
        id: 1,
        name: 'Sugar Mills Estate',
        imgSrc: SugarMillEstateImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Sugar Mills Estate.',
        siteDetails: '2,500 sq ft, 4 beds, 3 baths',
        contact: 'Contact: John Doe, Phone: (123) 456-7890',
        images: [SugarMillEstateImage],
    },
    {
        id: 2,
        name: 'Dawson Estates',
        imgSrc: DawsonEstatesImage,
        location: 'Mercedes, TX',
        description: 'This is a detailed description for Dawson Estates.',
        siteDetails: '3,200 sq ft, 5 beds, 4 baths',
        contact: 'Contact: Jane Smith, Phone: (234) 567-8901',
        images: [DawsonEstatesImage],
    },
    {
        id: 3,
        name: 'El Dorado Subdivision',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for El Dorado Subdivision.',
        siteDetails: '3,800 sq ft, 6 beds, 5 baths',
        contact: 'Contact: Emily Davis, Phone: (345) 678-9012',
        images: [
            ElDoradoImage, ElDorado1, ElDorado2, ElDorado3, ElDorado4, ElDorado5
        ],
    },
    {
        id: 4,
        name: 'The Heights at Alamo',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for The Heights at Alamo.',
        siteDetails: '3,800 sq ft, 6 beds, 5 baths',
        contact: 'Contact: Emily Davis, Phone: (345) 678-9012',
        images: [
            ElDoradoImage, ElDorado1, ElDorado2, ElDorado3, ElDorado4, ElDorado5
        ],
    },
    {
        id: 5,
        name: 'Verona Subdivision',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Verona Subdivision.',
        siteDetails: '3,800 sq ft, 6 beds, 5 baths',
        contact: 'Contact: Emily Davis, Phone: (345) 678-9012',
        images: [
            ElDoradoImage, ElDorado1, ElDorado2, ElDorado3, ElDorado4, ElDorado5
        ],
    },
    {
        id: 6,
        name: 'Westwood Villas',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Westwood Villas.',
        siteDetails: '3,800 sq ft, 6 beds, 5 baths',
        contact: 'Contact: Emily Davis, Phone: (345) 678-9012',
        images: [
            ElDoradoImage, ElDorado1, ElDorado2, ElDorado3, ElDorado4, ElDorado5
        ],
    },
];

const PropertyDetail = () => {
    const { id } = useParams(); // Get the property ID from the URL
    const property = properties.find((prop) => prop.id === parseInt(id)); // Find the property by ID

    // If the property is not found, display a message
    if (!property) {
        return <p>Property not found</p>;
    }

    // State to manage the image popup visibility and selected image
    const [showImage, setShowImage] = useState('');

    const handleImageClick = (image) => {
        setShowImage(image); // Set the clicked image for display
    };

    const handleCloseImage = () => {
        setShowImage(''); // Close the image popup
    };

    return (
        <div className="property-detail-container">
            {/* PropertyHero Component for background video */}
            <PropertyHero />

            <Container className="property-detail-content mt-5">
                <Row className="align-items-start">
                    {/* Image Carousel on the left */}
                    <Col md={8} className="carousel-container">
                        {property.images.length > 0 && (
                            <Carousel interval={3000} controls={true} indicators={true}>
                                {property.images.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100 card-img-top"
                                            src={image}
                                            alt={`Slide ${index}`}
                                            onClick={() => handleImageClick(image)}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        )}
                    </Col>

                    {/* Property Details / Site Details Section on the right */}
                    <Col md={4}>
                        <Card className="property-details-card shadow-sm border-light">
                            <Card.Body>
                                <h2 className="property-title">{property.name}</h2>
                                <h5 className="property-location">{property.location}</h5>
                                <Card.Text className="property-description">{property.description}</Card.Text>
                                <h3>Property Details</h3>
                                <p className="property-details">{property.siteDetails}</p>
                                <h3>Contact Information</h3>
                                <p className="property-contact">{property.contact}</p>
                                <Button variant="primary" as={Link} to="/portfolio" className="mt-3">
                                    Back to Portfolio
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Image popup */}
                {showImage && (
                    <div className="image-popup" onClick={handleCloseImage}>
                        <img src={showImage} alt="Selected" className="popup-image" />
                    </div>
                )}
            </Container>
            <Footer/>
        </div>
    );
};

export default PropertyDetail;
