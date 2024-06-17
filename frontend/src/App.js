// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Navbar component
import Footer from './components/Footer'; // Footer component
import Home from './pages/Home'; // Home Page component
import Hero from './components/Hero'; // Hero component
//import Subdivisions from './pages/Subdivisions'; // Subdivisions Page component
//import Services from './pages/Services'; // Services Page component
//import AboutUs from './pages/AboutUs'; // AboutUs Page component
import ContactUs from './pages/ContactUs'; // ContactUs Page component
import './assets/styles/App.css'; // App CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4'; // Background video

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
            <Route path="/subdivisions" element={<Home />} /> {/* element placeholder */}
            <Route path="/services" element={<Home />} /> {/* element placeholder */}
            <Route path="/about-us" element={<Home />} /> {/* element placeholder */}
            <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
