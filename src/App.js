// App.js
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Hero from './components/Hero'; 
import Statistics from './components/statistics'; 
import Services from './pages/Services'; 
import ContactUs from './pages/ContactUs'; 
import Portfolio from './pages/Portfolio'; 
import PropertyDetail from './pages/PropertyDetail'; 
import UpcomingProperties from './pages/UpcomingProperties';
import OurMissionHistory from './pages/OurMissionHistory';  // New Page Import
import CompanyCulture from './pages/CompanyCulture'; // New Page Import
import ExecutiveTeam from './pages/ExecutiveTeam'; // New Page Import
import UnderConstruction from './pages/UnderConstruction'; // New Page Import
import FeaturedPropsPage from './pages/FeaturedPropsPage'; // New Page Import
import BidOurWork from './pages/BidOurWork'; 
import OfficeLocations from './pages/OfficeLocations'; 
import './assets/styles/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css'; 
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4'; 

const Layout = ({ children }) => {
    const location = useLocation(); 
    const isPropertyDetail = location.pathname.startsWith('/property/');

    return (
        <div className="App">
            {/* Navbar and Hero Section */}
            {!isPropertyDetail && (
                <header className="App-header">
                    <Navbar />
                    <Hero videoSource={videoSource} />
                    <Statistics />
                </header>
            )}
            {/* Main Content Area */}
            <main className="content">
                {children}
            </main>
            {/* Footer Below Content */}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired, 
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/home" element={<Layout><Home /></Layout>} />
                <Route path="/services" element={<Layout><Services /></Layout>} />
                <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
                <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
                <Route path="/property/:id" element={<><Navbar /><PropertyDetail /><Footer /></>} />
                <Route path="/upcoming-properties" element={<Layout><UpcomingProperties/></Layout>} />
                {/* New Pages Routes */}
                <Route path="/our-mission-history" element={<Layout><OurMissionHistory /></Layout>} />
                <Route path="/company-culture" element={<Layout><CompanyCulture /></Layout>} />
                <Route path="/executive-team" element={<Layout><ExecutiveTeam /></Layout>} />
                <Route path="/under-construction" element={<Layout><UnderConstruction /></Layout>} />
                <Route path="/featured-properties" element={<Layout><FeaturedPropsPage /></Layout>} />
                <Route path="/bid-our-work" element={<Layout><BidOurWork /></Layout>} />
                <Route path="/office-locations" element={<Layout><OfficeLocations /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
