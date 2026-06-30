import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import ReasonsSection from '../components/ReasonsSection';
import HowItHelpsSection from '../components/HowItHelpsSection';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const isScrolling = useRef(false);
  const totalSections = 4;
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable custom scroll logic on mobile

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

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > 50) {
        isScrolling.current = true;
        if (diffY > 0) {
          setActiveIndex((prev) => Math.min(prev + 1, totalSections - 1));
        } else {
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <div 
      className="sections-container" 
      style={!isMobile ? { transform: `translateY(-${activeIndex * 100}vh)` } : {}}
    >
      <Hero />
      <TargetAudience />
      <ReasonsSection />
      <HowItHelpsSection />
    </div>
  );
};

export default Home;
