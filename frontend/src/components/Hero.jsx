import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the entry animation shortly after the component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
      {/* Background Image that dictates the container size */}
      <img src="/assets/Hero section background.png" alt="Hero Background" className="hero-bg-image" />
      
      {/* Absolute overlay for content */}
      <div className="hero-content-overlay">
        
        {/* Left Column Content */}
        <div className="hero-left">
          <div className="hero-subtitle">
            <span className="line"></span>
            <p>Elevate Your Confidence</p>
          </div>
          
          <h1 className="h1">
            Beauty.<br/>
            Care.<br/>
            You.
          </h1>
          
          <p className="hero-description text-muted">
            Premium skincare, haircare & nailcare<br/>
            solutions tailored just for you.
          </p>
          
          <button className="btn-primary">
            Discover Our Products
            <span className="icon-circle">→</span>
          </button>
        </div>
        


        {/* Bottom Right Icons */}
        <div className="hero-services-icons">
          <div className="service-icon">
            <img src="/assets/skin icon.png" alt="Skin Care" />
            <p>Skin Care</p>
            <span className="dot"></span>
          </div>
          <div className="service-icon">
            <img src="/assets/hair icon.png" alt="Hair Care" />
            <p>Hair Care</p>
            <span className="dot"></span>
          </div>
          <div className="service-icon">
            <img src="/assets/nails icon.png" alt="Nail Care" />
            <p>Nail Care</p>
            <span className="dot"></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
