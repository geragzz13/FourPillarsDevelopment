import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Carousel, Button } from 'react-bootstrap';
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';
import ElDoradoMap from '../assets/images/ElDoradoMap.png';
import ElDorado1 from '../assets/images/ElDorado1.png';
import ElDorado2 from '../assets/images/ElDorado2.png';
import ElDorado3 from '../assets/images/ElDorado3.png';
import ElDorado4 from '../assets/images/ElDorado4.png';
import ElDorado5 from '../assets/images/ElDorado5.png';
import '../assets/styles/PropertyDetail.css';

const properties = [
    {
        id: 1,
        name: 'Sugar Mills Estate',
        imgSrc: SugarMillEstateImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Sugar Mills Estate.',
        images: [SugarMillEstateImage],
        videos: [],
        contacts: [
            { name: 'Emmanuel Perez', role: 'Manager', email: 'emmanuel@example.com' },
            { name: 'Emiliano Perez', role: 'Manager', email: 'emiliano@example.com' },
        ],
    },
    {
        id: 2,
        name: 'Dawson Estates',
        imgSrc: DawsonEstatesImage,
        location: 'Mercedes, TX',
        description: 'This is a detailed description for Dawson Estates.',
        images: [DawsonEstatesImage],
        videos: [],
        contacts: [
            { name: 'Carlos Sanchez', role: 'Agent', email: 'carlos@example.com' },
            { name: 'Maria Garcia', role: 'Agent', email: 'maria@example.com' },
        ],
    },
    {
        id: 3,
        name: 'El Dorado Subdivision',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for El Dorado Subdivision.',
        images: [
            ElDoradoImage,
            ElDoradoMap,
            ElDorado1,
            ElDorado2,
            ElDorado3,
            ElDorado4,
            ElDorado5
        ],
        videos: [],
        contacts: [
            { name: 'Juan Lopez', role: 'Agent', email: 'juan@example.com' },
            { name: 'Lucia Martinez', role: 'Agent', email: 'lucia@example.com' },
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
            <Container>
                <h3>{property.name}</h3>
                <Card className="property-detail-card">
                    {/* Image Carousel */}
                    {property.images.length > 0 && (
                        <Carousel>
                            {property.images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100 card-img-top"
                                        src={image}
                                        alt={`Slide ${index}`}
                                        onClick={() => handleImageClick(image)} // Click handler
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}

                    {/* Property Details */}
                    <Card.Body>
                        <Card.Text><strong>Location:</strong> {property.location}</Card.Text>
                        <Card.Text>{property.description}</Card.Text>

                        {/* Videos Section (if available) */}
                        {property.videos.length > 0 && (
                            <div className="video-section">
                                {property.videos.map((video, index) => (
                                    <video key={index} width="100%" controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ))}
                            </div>
                        )}

                        {/* Contacts Section */}
                        <h5>Contacts:</h5>
                        {property.contacts.map((contact, index) => (
                            <p key={index}>
                                {contact.name} - {contact.role} - <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            </p>
                        ))}

                        <Button variant="primary" as={Link} to="/portfolio">Back to Portfolio</Button>
                    </Card.Body>
                </Card>

                {/* Image popup */}
                {showImage && (
                    <div className="image-popup" onClick={handleCloseImage}>
                        <img
                            src={showImage}
                            alt="Selected"
                            className="popup-image"
                        />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default PropertyDetail;
