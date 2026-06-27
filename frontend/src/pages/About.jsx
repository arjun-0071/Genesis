import React from 'react';
import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>ABOUT <span>Genesis</span></h1>
      </div>
      <div className="page-content about-content">
        <p className="lead-text">
          Genesis was born from a singular vision: to bridge the gap between rigorous clinical science and pure aesthetic beauty. 
        </p>
        <div className="text-block">
          <h2>Our Philosophy</h2>
          <p>
            We believe that true beauty starts from within. For decades, the industry focused purely on topical treatments that masked underlying issues. Genesis flips this paradigm by delivering highly bioavailable, premium nutrients directly to your body's cellular matrix.
          </p>
          <p>
            By combining cutting-edge biotechnology with ethically sourced natural extracts, we create formulations that don't just promise results—they biologically engineer them.
          </p>
        </div>
        <div className="text-block">
          <h2>The Science of Radiance</h2>
          <p>
            Every Genesis product undergoes relentless clinical testing. From our specialized keratin peptides to our proprietary antioxidant blends, each ingredient is selected for its supreme efficacy, stability, and unparalleled absorption rate.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
