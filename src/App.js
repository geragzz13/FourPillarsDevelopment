import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Navbar component
import Footer from './components/Footer'; // Footer component
import Home from './pages/Home'; // Home Page component
import Hero from './components/Hero'; // Hero component
import Services from './pages/Services'; // Services Page component
import AboutUs from './pages/AboutUs'; // AboutUs Page component
import ContactUs from './pages/ContactUs'; // ContactUs Page component
import Portfolio from './pages/Portfolio'; // Portfolio Page component
import PropertyDetail from './pages/PropertyDetail'; // Property Detail Page component
import './assets/styles/App.css'; // App CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css'; // Fonts CSS
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4'; // Background video
/* import Capabilities from './components/Capabilities'; // Capabilities component */

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Hero videoSource={videoSource} />
        </header>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/about-us" element={<AboutUs />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
