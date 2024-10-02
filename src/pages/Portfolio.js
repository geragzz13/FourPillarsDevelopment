import React from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css';
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';
import PillarsMainCardImage from '../assets/images/PillarsMainCard.png'; // Import the new image

const properties = [
    { id: 0, name: 'Welcome', imgSrc: ElDoradoImage, location: 'Your Location', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' }, // New first card
    { id: 1, name: 'Sugar Mill Estate', imgSrc: SugarMillEstateImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 2, name: 'Dawson Estates', imgSrc: DawsonEstatesImage, location: 'Mercedes, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 3, name: 'El Dorado Subdivision', imgSrc: ElDoradoImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 4, name: 'Villas', imgSrc: ElDoradoImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 5, name: 'The Heights at Alamo', imgSrc: ElDoradoImage, location: 'Alamo, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { id: 6, name: 'Vida Subdivision', imgSrc: ElDoradoImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    // Add more properties as needed
    // Add more properties as needed
    // Add more properties as needed
    // Add more properties as needed
];

const Portfolio = () => {
    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the auto-scroll speed (in milliseconds)
        arrows: false, // Hide arrows for manual control
        swipe: true, // Enable swipe for touch devices
        draggable: true, // Enable dragging with mouse
        adaptiveHeight: true
    };

    return (
        <div className="portfolio-container">
            <Container>
                <Slider {...settings} className="property-carousel">
                    {properties.map((property) => (
                        <Card key={property.id} className="property-card">
                            <Card.Img variant="top" src={property.imgSrc} className="property-card-img" />
                            <Card.Body>
                                <Card.Title>{property.name}</Card.Title>
                                <Card.Text><strong>Location:</strong> {property.location}</Card.Text>
                                <Card.Text>{property.description}</Card.Text>
                                <Link to={`/property/${property.id}`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default Portfolio;