import React, { useEffect, useRef } from 'react';
import '../assets/styles/MissionHistory.css';
import westwoodImage from '../assets/images/westwood4.png';
import westwoodNew from '../assets/images/westwood2.png';

const MissionPage = () => {
    const missionRef = useRef(null);
    const historyRef = useRef(null);
    const growthRef = useRef(null);

    useEffect(() => {
        const handleScrollAnimation = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeInOnScrollVisible');
                    observer.unobserve(entry.target); // Remove observer after it’s in view
                }
            });
        };

        const observer = new IntersectionObserver(handleScrollAnimation, { threshold: 0.5 });

        // Observe elements
        if (missionRef.current) {
            observer.observe(missionRef.current);
        }
        if (historyRef.current) {
            observer.observe(historyRef.current);
        }
        if (growthRef.current) {
            observer.observe(growthRef.current);
        }

        return () => {
            // Cleanup observer on component unmount
            if (missionRef.current) observer.unobserve(missionRef.current);
            if (historyRef.current) observer.unobserve(historyRef.current);
            if (growthRef.current) observer.unobserve(growthRef.current);
        };
    }, []);

    return (
        <div className="mission-history-container">
            {/* About Section */}
            <div className="about-section">
                <h2>About Four Pillars Development</h2>
                <p>
                    Four Pillars Development is a leading multi-family construction and property development company
                    based in Edinburg, Texas. Our mission is to provide quality living spaces, and our vision is to create
                    strong communities through thoughtful development.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mission-section fadeInOnScroll" ref={missionRef}>
                <div className="mission-image">
                    <img src={westwoodImage} alt="Mission Image" />
                </div>
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        With the cooperation and contributions of our valued team members, the Brownstone Group seeks to
                        create and deliver successful developments to satisfied clients and residents.
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="history-section fadeInOnScroll" ref={historyRef}>
                <div className="history-content">
                    <h2>History</h2>
                    <p>
                        In 1971, William &quot;Bill&quot; L. Brown formed his first real estate company. Between 1971 and 2005,
                        Bill’s companies planned, developed, and/or constructed over 6,000 housing units.
                    </p>
                </div>
                <div className="history-image">
                    <img src={westwoodNew} alt="History Image" />
                </div>
            </div>

            {/* Growth Section */}
            <div className="growth-section fadeInOnScroll" ref={growthRef}>
                <div className="growth-content">
                    <h2>Steady Growth</h2>
                    <p>
                        In 2018, Brownstone Residential, LLC, an in-house property management company, was created to provide
                        the best property management services available.
                    </p>
                </div>
                <div className="growth-image">
                    <img src={westwoodImage} alt="Growth Image" />
                </div>
            </div>
        </div>
    );
};

export default MissionPage;
