import React, { useEffect, useRef, useState } from 'react';
import { Utensils, BatteryWarning, Hourglass, Hand, Wind, Sun } from 'lucide-react';
import './ReasonsSection.css';

const reasons = [
  {
    icon: <Utensils size={36} strokeWidth={1.5} />,
    title: "Unbalanced Diet",
    desc: "Missing essential vitamins and nutrients in your daily meals can lead to dull skin and brittle nails. Genesis bridges that nutritional gap perfectly."
  },
  {
    icon: <BatteryWarning size={36} strokeWidth={1.5} />,
    title: "Stress & Fatigue",
    desc: "High stress levels deplete your body's natural reserves, accelerating hair loss and skin aging. Replenish your core with our advanced formula."
  },
  {
    icon: <Hourglass size={36} strokeWidth={1.5} />,
    title: "Aging & Fine Lines",
    desc: "As we age, natural collagen production slows down. Give your body the vital building blocks it needs to maintain elasticity, youth, and radiance."
  },
  {
    icon: <Hand size={36} strokeWidth={1.5} />,
    title: "Brittle Nails",
    desc: "Frequent use of harsh chemicals or acrylics can damage the nail bed. Restore natural strength and prevent painful delamination from the inside out."
  },
  {
    icon: <Wind size={36} strokeWidth={1.5} />,
    title: "Hair Thinning",
    desc: "Whether due to genetics, styling damage, or environmental factors, your hair needs targeted internal nourishment to regain its volume and shine."
  },
  {
    icon: <Sun size={36} strokeWidth={1.5} />,
    title: "Environmental Damage",
    desc: "Pollution and UV rays constantly attack your skin barrier. Fortify your body's natural defenses from the inside out every single day."
  }
];

const ReasonsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for initial mount animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto-cycling timer
  useEffect(() => {
    if (!isVisible || isPaused) return; // Only start cycling when visible and not paused

    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((current) => (current + 1) % reasons.length);
    }, 4000); // Cycle every 4 seconds

    return () => clearInterval(timer);
  }, [isVisible, activeIndex, isPaused]);

  const handleIndicatorClick = (index) => {
    if (index === activeIndex) return;
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="reasons-section" ref={sectionRef}>
      <div className="reasons-container">
        
        {/* Left Side: Split Title */}
        <div className={`reasons-header ${isVisible ? 'animate-in' : ''}`}>
          <h2>
            WHEN DO YOU NEED 
            <span className="highlight-script">Genesis?</span>
          </h2>
          <p>Discover the signs that your body is craving essential, premium nourishment.</p>
        </div>

        {/* Right Side: Animated Card Showcase */}
        <div 
          className={`cards-showcase ${isVisible ? 'animate-in' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reasons.map((reason, index) => {
            // Determine CSS class based on state to trigger animations
            let cardClass = "reason-card";
            if (index === activeIndex) {
              cardClass += " active";
            } else if (index === prevIndex) {
              cardClass += " exiting";
            }

            return (
              <div className={cardClass} key={index}>
                <div className="reason-icon-wrapper">
                  {reason.icon}
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            );
          })}

          {/* Vertical Progress Indicators */}
          <div className="showcase-indicators">
            {reasons.map((_, index) => (
              <div 
                key={index} 
                className={`indicator ${index === activeIndex ? 'active' : ''}`} 
                onClick={() => handleIndicatorClick(index)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReasonsSection;
