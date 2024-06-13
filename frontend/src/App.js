import React from 'react';
import './styles/App.css'; // Assuming the file is located one level up from the current component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Ensure correct import path
import Footer from './components/Footer';
import Home from './pages/Home';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar component */}
        <Hero /> {/* Render Hero component */}  
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
