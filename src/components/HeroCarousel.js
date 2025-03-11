// src/components/HeroCarousel.js
import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/HeroCarousel.css'; 

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Disable arrows
    };

    return (
        <div className="hero-carousel">
            <Slider {...settings}>
                <div>
                    <img src={require('../assets/images/TheHeights1.png')} alt="The Heights 1" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights2.png')} alt="The Heights 2" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights3.png')} alt="The Heights 3" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights4.png')} alt="The Heights 4" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights5.png')} alt="The Heights 5" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights6.png')} alt="The Heights 6" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights7.png')} alt="The Heights 7" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights8.png')} alt="The Heights 8" className="carousel-image" />
                </div>
                <div>
                    <img src={require('../assets/images/TheHeights9.png')} alt="The Heights 9" className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
};

export default HeroCarousel;
