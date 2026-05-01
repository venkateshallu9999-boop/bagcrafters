import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 3);
  const newArrivals = products.slice(3, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-subtitle">Premium Quality</span>
            <h1 className="hero-title">Carry Your Journey in Style</h1>
            <p className="hero-description">
              Discover our exclusive collection of meticulously crafted school and travel bags designed for the modern explorer.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Shop Collection</button>
              <button className="btn btn-outline">Explore Travel <ArrowRight size={18} /></button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Backpack" 
              className="hero-image"
            />
            <div className="experience-badge">
              <span>10+</span>
              <small>Years Exp</small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Now</h2>
            <a href="/shop" className="view-all-link">View All Bags <ArrowRight size={16} /></a>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="container promo-container">
          <div className="promo-content">
            <h2>Ready for Your Next Adventure?</h2>
            <p>Get 20% off on all travel bags this weekend.</p>
            <button className="btn btn-primary">Claim Discount</button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <a href="/travel" className="view-all-link">Explore New <ArrowRight size={16} /></a>
          </div>
          <div className="products-grid">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 BagCrafters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
