import React from 'react';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Welcome to Droplet Wish</h1>
        <p>The Digital Wishlist App that helps you track price drops, create wishlists, and share them with your loved ones for gifting ideas.</p>
      </header>

      <div className="features">
        <div className="feature">
          <h2>Track Price Drops</h2>
          <p>Get notified whenever the price of an item on your wishlist drops, so you never miss a deal.</p>
        </div>
        <div className="feature">
          <h2>Easy Wishlist Management</h2>
          <p>Add and manage your wishlist items, organize them into categories, and plan for future purchases.</p>
        </div>
        <div className="feature">
          <h2>Share Your Wishlist</h2>
          <p>Share your wishlist with family and friends for easy gift suggestions.</p>
        </div>
      </div>

      <div className="cta">
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
