import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import ReasonsSection from '../components/ReasonsSection';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);
  const totalSections = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Native scrolling on mobile/tablet

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  return (
    <div 
      className="sections-container" 
      style={isMobile ? {} : { transform: `translateY(-${activeIndex * 100}vh)` }}
    >
      <Hero />
      <TargetAudience />
      <ReasonsSection />
    </div>
  );
};

export default Home;
