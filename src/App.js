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
import './assets/styles/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/Fonts.css'; 
import videoSource from './assets/videos/FourPillarsBackgroundVideo.mp4'; 

// Layout component with proper structuring to ensure CSS inheritance
const Layout = ({ children }) => {
  const location = useLocation(); 
  const isPropertyDetail = location.pathname.startsWith('/property/');

  return (
    <>
      {/* Kept header structure to ensure proper rendering */}
      {!isPropertyDetail && (
        <header className="App-header">
          <Navbar />
          <Hero videoSource={videoSource} />
          <Statistics />
        </header>
      )}
      <main className="content">
        {children}
      </main>
      <Footer />
    </>
  );
};

// PropTypes validation for Layout
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
          <Route path="/property/:id" element={<><Navbar /><PropertyDetail /><Footer /></>} />
          <Route path="/upcoming-properties" element={<Layout><UpcomingProperties/></Layout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
