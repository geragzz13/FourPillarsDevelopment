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
import PropertyDetail from './pages/PropertyDetail';
import UpcomingProperties from './pages/UpcomingProperties';
import CompanyCulture from './pages/CompanyCulture';
import UnderConstruction from './pages/UnderConstruction';
import FeaturedPropsPage from './pages/FeaturedPropsPage';
import BidOurWork from './pages/BidOurWork';  {/* BidOurWork Page */}
import OfficeLocations from './pages/OfficeLocations';
import UnderMaintenance from './components/UnderMaintenence'; // Import UnderMaintenance component
import MissionPage from './pages/MissionPage';  // Import the MissionPage (test page)
import ExecutiveTeam from './pages/ExecutiveTeam';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css';
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4';

// Toggle this variable to enable/disable maintenance mode
const isUnderMaintenance = false;

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
                    {/* Render Statistics only on Home page */}
                    {location.pathname === '/' && <Statistics />}
                </header>
            )}
            {/* Main Content Area */}
            <main className="content">{children}</main>
            {/* Footer Below Content */}
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function App() {
    if (isUnderMaintenance) {
        // Render only the UnderMaintenance component
        return (
            <Router>
                <Routes>
                    <Route path="*" element={<UnderMaintenance />} />
                </Routes>
            </Router>
        );
    }

    // Render the rest of the app when not in maintenance mode
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/home" element={<Layout><Home /></Layout>} />
                <Route path="/services" element={<Layout><Services /></Layout>} />
                <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
                <Route path="/property/:id" element={<><Navbar /><PropertyDetail /><Footer /></>} />
                <Route path="/upcoming-properties" element={<Layout><UpcomingProperties /></Layout>} />
                <Route path="/company-culture" element={<Layout><CompanyCulture /></Layout>} />
                <Route path="/under-construction" element={<Layout><UnderConstruction /></Layout>} />
                <Route path="/featured-properties" element={<Layout><FeaturedPropsPage /></Layout>} />
                <Route path="/bid-our-work" element={<Layout><BidOurWork /></Layout>} /> {/* Correct BidOurWork Page */}
                <Route path="/office-locations" element={<Layout><OfficeLocations /></Layout>} />
                <Route path="/our-mission" element={<Layout><MissionPage /></Layout>} /> {/* New Test Page route */}
                {/* <Route path="/executive-team" element={<Layout><ExecutiveTeam /></Layout>} /> Route for Executive Team */} 
            </Routes>
        </Router>
    );
}

export default App;
