import React from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css';
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';

const properties = [
    { id: 0, name: 'Welcome', imgSrc: ElDoradoImage, location: 'Your Location', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 1, name: 'Sugar Mills Estate', imgSrc: SugarMillEstateImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Dawson Estates', imgSrc: DawsonEstatesImage, location: 'Mercedes, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, name: 'El Dorado Subdivision', imgSrc: ElDoradoImage, location: 'Edinburg, TX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    // Add more properties as needed
];

const Portfolio = () => {
    const settings = {
        dots: false, // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Hide arrows
        swipe: true, // Enable swipe
        draggable: true, // Enable drag with mouse
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // For tablets and below
                settings: {
                    slidesToShow: 2, // Show 2 slides
                },
            },
            {
                breakpoint: 576, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide
                },
            },
        ],
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
