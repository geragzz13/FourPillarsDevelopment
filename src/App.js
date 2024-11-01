import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Hero from './components/Hero'; 
import Services from './pages/Services'; 
import ContactUs from './pages/ContactUs'; 
import Portfolio from './pages/Portfolio'; 
import PropertyDetail from './pages/PropertyDetail'; 
import UpcomingProperties from './pages/UpcomingProperties';
import './assets/styles/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css'; 
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4'; 

// Create a wrapper component to manage conditional rendering
const Layout = ({ children }) => {
  const location = useLocation(); 

  // Determine if the current path is the PropertyDetail page
  const isPropertyDetail = location.pathname.startsWith('/property/');

  return (
    <>
      {/* Conditionally render the header */}
      {!isPropertyDetail && (
        <header className="App-header">
          <Navbar />
          {/* Conditionally render Hero component */}
          <Hero videoSource={videoSource} />
        </header>
      )}
      <main className="content">
        {children}
      </main>
      {/* Always render the footer */}
      <Footer />
    </>
  );
};

// PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/property/:id" element={<><Navbar /><PropertyDetail /></>} /> {/* Render Navbar with PropertyDetail */}
          <Route path="/upcoming-properties" element={<Layout><UpcomingProperties/></Layout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
