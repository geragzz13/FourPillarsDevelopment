import React from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/FeaturedProperties.css'; // Now using its own CSS file
import TheHeights1 from '../assets/images/TheHeights1.png';
import ElDoradoThumbnail from '../assets/images/ElDoradoThumbnail.png';
import SugarMillsThumbnail from '../assets/images/SugarMillsThumbnail.png';
import DawsonThumbnail from '../assets/images/DawsonEstatesPortfolio.png';

// Featured Property Data Array
const featuredProperties = [
    {
        id: 1,
        name: 'Sugar Mills Estate',
        imgSrc: SugarMillsThumbnail,
        location: 'Edinburg, TX',
        description: 'Student Housing Goldmine, Sugar Mills Estate!',
    },
    {
        id: 2,
        name: 'Dawson Estates',
        imgSrc: DawsonThumbnail,
        location: 'Mercedes, TX',
        description: 'Prime Investment property in Mercedes, TX!',
    },
    {
        id: 3,
        name: 'El Dorado Subdivision',
        imgSrc: ElDoradoThumbnail,
        location: 'Edinburg, TX',
        description: 'Prime Investment Opportunity in North McAllen!',
    },
    {
        id: 4,
        name: 'The Heights at Alamo',
        imgSrc: TheHeights1,
        location: 'Alamo, TX',
        description: 'Luxury living in Alamo, TX!',
    },
];

const FeaturedProperties = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
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
        <section className="featured-properties-section">
            <Container>
                <h2 className="main-title">Featured Properties</h2>
                <Slider {...settings} className="property-carousel">
                    {featuredProperties.map((property) => (
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
        </section>
    );
};

export default FeaturedProperties;
