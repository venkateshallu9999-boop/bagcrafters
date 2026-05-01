import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

// Placeholder for future pages
const Shop = () => <div className="placeholder-page"><h2>Shop School Bags</h2></div>;
const Travel = () => <div className="placeholder-page"><h2>Travel Bags</h2></div>;
const About = () => <div className="placeholder-page"><h2>About Us</h2></div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
