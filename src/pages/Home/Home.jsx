import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className="home-container">
      <main className="hero">
        <span className="badge">Welcome to our store</span>
        <h1 className="hero-title">
          You can buy <span className="highlight-green">here</span> <br />
          <span className="highlight-orange">everything!</span>
        </h1>
        <p className="hero-subtitle">
          Discover thousands of modern products curated just for you. High quality, best prices, and lightning-fast delivery.
        </p>

        <div className="hero-actions">
          <Link to="/catalog" className="btn-primary">Explore Products</Link>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast Shipping</h3>
            <p>Delivered to your door in 24 hours.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payment</h3>
            <p>100% encrypted & safe transactions.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>We are always here to help you.</p>
          </div>
        </div>
      </main>
    </div>
  );
};