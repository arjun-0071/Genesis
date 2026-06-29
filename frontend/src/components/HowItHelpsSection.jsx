import React, { useState } from 'react';
import { Leaf, FlaskConical, Droplet, HeartHandshake, Sparkles, Timer, Shield, Target } from 'lucide-react';
import './HowItHelpsSection.css';

const HowItHelpsSection = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const benefits = [
    { icon: <Leaf size={46} strokeWidth={1.5} />, title: "Clean Ingredients", description: "We strictly avoid parabens, sulfates, and harsh synthetic chemicals. Our holistic approach ensures that your daily routine remains pure, safe, and completely free from any hidden toxins that could irritate your skin." },
    { icon: <FlaskConical size={46} strokeWidth={1.5} />, title: "Expert Formulations", description: "Developed alongside industry-leading dermatologists and cosmetic chemists to ensure maximum clinical efficacy. Every single drop is meticulously engineered for optimal absorption without causing irritation." },
    { icon: <Droplet size={46} strokeWidth={1.5} />, title: "Deep Hydration", description: "Our advanced lipid technology penetrates deep into the cellular level to actively lock in essential moisture. Experience a glowing, radiant complexion that stays perfectly hydrated for up to 48 hours." },
    { icon: <HeartHandshake size={46} strokeWidth={1.5} />, title: "Ethical Sourcing", description: "We are fiercely committed to the planet. All of our rich botanical extracts are 100% cruelty-free, ethically harvested, and sustainably sourced from fair-trade communities across the globe." },
    { icon: <Sparkles size={46} strokeWidth={1.5} />, title: "Visible Results", description: "Don't just feel the difference, see it. Our concentrated formulas are clinically proven to visibly improve skin texture, reduce fine lines, and significantly increase hair strength within just 14 days." },
    { icon: <Timer size={46} strokeWidth={1.5} />, title: "Streamlined Routine", description: "We believe in minimalism without compromise. Our luxury multi-purpose products are designed to cut your bathroom time in half while delivering the same benefits as a complex 10-step regimen." },
    { icon: <Shield size={46} strokeWidth={1.5} />, title: "Barrier Protection", description: "Your skin's natural barrier is your first line of defense. We fortify it with essential bio-identical ceramides and antioxidants to shield you against urban pollution and harsh environmental stressors." },
    { icon: <Target size={46} strokeWidth={1.5} />, title: "Custom Regimens", description: "No two bodies are exactly alike. Genesis provides uniquely tailored, modular solutions specifically designed to adapt to your individual hair porosity, skin hydration levels, and personal wellness goals." }
  ];

  const handleNext = () => {
    // Subtracting angle rotates the cylinder right-side forward
    setRotationAngle((prev) => prev - 45);
  };

  const handlePrev = () => {
    // Adding angle rotates the cylinder left-side forward
    setRotationAngle((prev) => prev + 45);
  };

  return (
    <section className="helps-section">
      <div className="helps-content">
        <div className="helps-title">
          <h2>HOW <span className="highlight-script">Genesis</span> HELPS</h2>
          <p className="text-muted">The science and care behind every drop.</p>
        </div>
        
        <div className="carousel-scene">
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={handlePrev}>❮</button>
            <button className="carousel-btn" onClick={handleNext}>❯</button>
          </div>
          
          <div 
            className="carousel-spinner" 
            style={{ transform: `translateZ(-640px) rotateY(${rotationAngle}deg)` }}
          >
            {benefits.map((benefit, index) => {
              // 360 degrees / 8 cards = 45 degrees per card
              return (
                <div 
                  className="carousel-card" 
                  key={index}
                  style={{ '--rotY': `${index * 45}deg` }}
                >
                  <div className="helps-icon-wrapper">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelpsSection;
