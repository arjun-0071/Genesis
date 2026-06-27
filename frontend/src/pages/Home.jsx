import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import ReasonsSection from '../components/ReasonsSection';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const totalSections = 3; // Updated to 3 for the new section

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default scrolling behavior if needed (handled by CSS overflow: hidden mostly)
      if (isScrolling.current) return;

      isScrolling.current = true;
      if (e.deltaY > 0) {
        // Scroll down
        setActiveIndex((prev) => Math.min(prev + 1, totalSections - 1));
      } else if (e.deltaY < 0) {
        // Scroll up
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      // Unlock scrolling after the transition completes
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // 1 second matches the CSS transition duration
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      className="sections-container" 
      style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
    >
      <Hero />
      <TargetAudience />
      <ReasonsSection />
    </div>
  );
};

export default Home;
