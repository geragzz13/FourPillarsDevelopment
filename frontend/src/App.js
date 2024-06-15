// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Adjust path as per your file structure
import Footer from './components/Footer'; // Adjust path as per your file structure
import Home from './pages/Home'; // Adjust path as per your file structure
import Hero from './components/Hero'; // Adjust path as per your file structure
import './assets/styles/App.css'; // Ensure correct path to your App.css or other styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Video background or other content */}
          <video autoPlay loop muted className="video-bg">
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Navbar />
        </header>
        <main className="content">
          <Hero />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes for other pages if needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
