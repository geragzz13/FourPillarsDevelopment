// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderMaintenance from './pages/UnderMaintenance'; // Import the maintenance page
import Navbar from './components/Navbar'; // Navigation bar component
import Footer from './components/Footer'; // Footer component
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import PropertyDetail from './pages/PropertyDetail';
import UpcomingProperties from './pages/UpcomingProperties';
import OurMissionHistory from './pages/OurMissionHistory';
import CompanyCulture from './pages/CompanyCulture';
import ExecutiveTeam from './pages/ExecutiveTeam';
import UnderConstruction from './pages/UnderConstruction';
import FeaturedPropsPage from './pages/FeaturedPropsPage';
import BidOurWork from './pages/BidOurWork';
import OfficeLocations from './pages/OfficeLocations';

import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css';

// Toggle this variable to enable/disable maintenance mode
const isUnderMaintenance = true;

function App() {
    return (
        <Router>
            {isUnderMaintenance ? (
                // Render only the maintenance page when in maintenance mode
                <Routes>
                    <Route path="*" element={<UnderMaintenance />} />
                </Routes>
            ) : (
                // Render the regular site routes when maintenance mode is off
                <Routes>
                    <Route path="/" element={<Layout><Home /></Layout>} />
                    <Route path="/home" element={<Layout><Home /></Layout>} />
                    <Route path="/services" element={<Layout><Services /></Layout>} />
                    <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
                    <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
                    <Route path="/property/:id" element={<><Navbar /><PropertyDetail /><Footer /></>} />
                    <Route path="/upcoming-properties" element={<Layout><UpcomingProperties /></Layout>} />
                    <Route path="/our-mission-history" element={<Layout><OurMissionHistory /></Layout>} />
                    <Route path="/company-culture" element={<Layout><CompanyCulture /></Layout>} />
                    <Route path="/executive-team" element={<Layout><ExecutiveTeam /></Layout>} />
                    <Route path="/under-construction" element={<Layout><UnderConstruction /></Layout>} />
                    <Route path="/featured-properties" element={<Layout><FeaturedPropsPage /></Layout>} />
                    <Route path="/bid-our-work" element={<Layout><BidOurWork /></Layout>} />
                    <Route path="/office-locations" element={<Layout><OfficeLocations /></Layout>} />
                </Routes>
            )}
        </Router>
    );
}

const Layout = ({ children }) => (
    <div className="App">
        <header className="App-header">
            <Navbar />
        </header>
        <main className="content">{children}</
