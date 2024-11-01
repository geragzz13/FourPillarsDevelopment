import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/Portfolio.css';
import Westwood1 from '../assets/images/westwood1.png';


// Define properties array with correct imgSrc for each card
const UpcomingPortfolio = [
    {
        id: 6,
        name: 'Westwood Villas',
        imgSrc: Westwood1,
        location: 'Edinburg, TX',
        description: 'Discover Your Next Investment Opportunity at Westwood Villas!',
    },
];

const UpcomingProperties = () => {
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

    const UpcomingPropertiesRef = useRef(null); // Ref for portfolio section

    useEffect(() => {
        // Scroll to the portfolio section on load with an offset
        if (UpcomingPropertiesRef.current) {
            const topPosition = UpcomingPropertiesRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = 150; // Adjust this value for less or more scroll
            window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="portfolio-container" ref={UpcomingPropertiesRef}>
            <Container>
                <div className="portfolio-title">
                    <h2>Upcoming Properties</h2>
                </div>
                <Slider {...settings} className="property-carousel">
                    {UpcomingPortfolio.map((UpcomingPortfolio) => (
                        <Card key={UpcomingPortfolio.id} className="property-card">
                            <Card.Img variant="top" src={UpcomingPortfolio.imgSrc} className="property-card-img" />
                            <Card.Body>
                                <Card.Title>{UpcomingPortfolio.name}</Card.Title>
                                <Card.Text><strong>Location:</strong> {UpcomingPortfolio.location}</Card.Text>
                                <Card.Text>{UpcomingPortfolio.description}</Card.Text>
                                <Link to={`/property/${UpcomingPortfolio.id}`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default UpcomingProperties;
