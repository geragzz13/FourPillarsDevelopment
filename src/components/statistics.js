import React from 'react';
import '../assets/styles/Statistics.css';

const Statistics = () => {
    return (
        <section className="statistics-section">
            <div className="stat-item">
                <h2>$2.56B</h2>
                <p>Residential Developments</p>
            </div>
            <div className="stat-item">
                <h2>20,341</h2>
                <p>Multi-Family Units</p>
            </div>
            <div className="stat-item">
                <h2>5</h2>
                <p>Offices</p>
            </div>
        </section>
    );
};

export default Statistics;
