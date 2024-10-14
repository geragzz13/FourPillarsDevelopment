import React from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css';
import SugarMillEstateImage from '../assets/images/SugarMillPortfolio.png';
import DawsonEstatesImage from '../assets/images/DawsonEstatesPortfolio.png';
import ElDoradoImage from '../assets/images/ElDoradoPortfolio.png';
import Westwood1 from '../assets/images/westwood1.png';
import TheHeights1 from '../assets/images/TheHeights1.png';

// Define properties array with correct imgSrc for each card
const properties = [
    {
        id: 1,
        name: 'Sugar Mills Estate',
        imgSrc: SugarMillEstateImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Sugar Mills Estate.',
        siteDetails: '2,500 sq ft, 4 beds, 3 baths',
    },
    {
        id: 2,
        name: 'Dawson Estates',
        imgSrc: DawsonEstatesImage,
        location: 'Mercedes, TX',
        description: 'This is a detailed description for Dawson Estates.',
    },
    {
        id: 3,
        name: 'El Dorado Subdivision',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for El Dorado Subdivision.',
    },
    {
        id: 4,
        name: 'The Heights at Alamo',
        imgSrc: TheHeights1, // Ensure this is the correct image for "The Heights"
        location: 'Edinburg, TX',
        description: 'This is a detailed description for The Heights at Alamo.',
    },
    {
        id: 5,
        name: 'Verona Subdivision',
        imgSrc: ElDoradoImage,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Verona Subdivision.',
    },
    {
        id: 6,
        name: 'Westwood Villas',
        imgSrc: Westwood1,
        location: 'Edinburg, TX',
        description: 'This is a detailed description for Westwood Villas.',
    },
];

const Portfolio = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true,
        draggable: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="portfolio-container">
            <Container>
                <div className="portfolio-title">
                    <h2>Available Properties</h2>
                </div>
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
