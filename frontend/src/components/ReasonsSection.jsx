import React, { useEffect, useRef, useState } from 'react';
import './ReasonsSection.css';

const reasons = [
  {
    title: "Unbalanced Diet",
    desc: "Missing essential vitamins and nutrients in your daily meals can lead to dull skin and brittle nails. Genesis bridges that gap perfectly.",
    color: "#5c162e" // Ruby Red / Wine
  },
  {
    title: "Stress & Fatigue",
    desc: "High stress levels deplete your body's natural reserves, accelerating hair loss and skin aging. Replenish with our advanced formula.",
    color: "#144533" // Emerald Green
  },
  {
    title: "Aging & Fine Lines",
    desc: "As we age, natural collagen production slows down. Give your body the vital building blocks it needs to maintain elasticity and youth.",
    color: "#28255b" // Deep Indigo
  },
  {
    title: "Brittle Nails",
    desc: "Frequent use of harsh chemicals or acrylics can damage the nail bed. Restore natural strength and prevent painful delamination.",
    color: "#4a3028" // Rich Mocha
  },
  {
    title: "Hair Thinning",
    desc: "Whether due to genetics, styling damage, or environmental factors, your hair needs targeted internal nourishment to regain its volume.",
    color: "#213959" // Slate Blue
  },
  {
    title: "Environmental Damage",
    desc: "Pollution and UV rays constantly attack your skin barrier. Fortify your body's natural defenses from the inside out every single day.",
    color: "#6b2914" // Deep Burnt Orange (Brand nod)
  }
];

const ReasonsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section className="reasons-section" ref={sectionRef}>
      <div className={`reasons-header ${isVisible ? 'animate-in' : ''}`}>
        <h2>WHEN DO YOU NEED <span className="highlight-script">Genesis?</span></h2>
        <p>Discover the signs that your body is craving essential, premium nourishment.</p>
      </div>

      <div className={`cards-wrapper ${isVisible ? 'animate-in' : ''}`}>
        <div className="cards-track">
          {/* Double the cards for a seamless infinite scroll illusion */}
          {[...reasons, ...reasons].map((reason, index) => (
            <div 
              className="reason-card" 
              key={index}
              style={{ backgroundColor: reason.color }}
            >
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
