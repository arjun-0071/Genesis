import React, { useEffect, useRef, useState } from 'react';
import './TargetAudience.css';

// Import images directly to guarantee Vite resolves them correctly
import imgNail1 from '../../public/assets/Who_needs_genesis/DELAMINATION OF THE NAIL PLATE.webp';
import imgNail2 from '../../public/assets/Who_needs_genesis/DISRUPTION OF NAIL GROWTH OR STRUCTURE.png';
import imgNail3 from '../../public/assets/Who_needs_genesis/INCREASED FRAGILITY OF NAILS AND OTHER ABNORMALITIES OF THE NAIL PLATE.jpg';

import imgHair1 from '../../public/assets/Who_needs_genesis/hair loss.jpg';
import imgHair2 from '../../public/assets/Who_needs_genesis/grey hair.jpg';
import imgHair3 from '../../public/assets/Who_needs_genesis/Increased hair thinning.webp';
import imgHair4 from '../../public/assets/Who_needs_genesis/split hair.webp';
import imgHair5 from '../../public/assets/Who_needs_genesis/extremely oily or dry hair.jpg';

import imgSkin1 from '../../public/assets/Who_needs_genesis/problem skin.png';
import imgSkin2 from '../../public/assets/Who_needs_genesis/oily skin.webp';
import imgSkin3 from '../../public/assets/Who_needs_genesis/dry skin.jpg';
import imgSkin4 from '../../public/assets/Who_needs_genesis/skin lightening.jpg';

const needsData = {
  nails: [
    {
      title: "DELAMINATION OF THE NAIL PLATE",
      image: imgNail1,
      desc: "Delamination often indicates a lack of essential structural proteins and moisture. Genesis delivers highly bioavailable keratin and biotin directly to the nail matrix, binding the layers of the nail plate back together and preventing future peeling."
    },
    {
      title: "DISRUPTION OF NAIL GROWTH OR STRUCTURE",
      image: imgNail2,
      desc: "Uneven growth, ridges, or slow growth are signs of cellular starvation at the nail bed. Our formula provides the exact blend of amino acids and minerals required to reboot cellular turnover, ensuring smooth, continuous, and healthy nail growth."
    },
    {
      title: "INCREASED FRAGILITY OF NAILS AND OTHER ABNORMALITIES OF THE NAIL PLATE",
      image: imgNail3,
      desc: "Fragile, snapping nails are a clear cry for fortification. Genesis reinforces the microscopic bonds within your nails using advanced collagen peptides, turning weak, brittle nails into strong, resilient shields that resist daily wear and tear."
    }
  ],
  hair: [
    {
      title: "HAIR LOSS",
      image: imgHair1,
      desc: "Hair loss can stem from stress, hormonal imbalances, or nutrient deficiency. Genesis aggressively targets the hair follicle, increasing microcirculation and delivering vital nutrients to prolong the anagen (growth) phase and drastically reduce shedding."
    },
    {
      title: "GRAY HAIR",
      image: imgHair2,
      desc: "Premature graying is often linked to oxidative stress and melanin depletion. Packed with powerful antioxidants and targeted minerals, Genesis helps protect pigment-producing cells, promoting vibrant, natural hair color and delaying the graying process."
    },
    {
      title: "INCREASED HAIR THINNING",
      image: imgHair3,
      desc: "Thinning hair implies shrinking follicles. Our targeted blend of DHT-blockers and follicle-stimulating vitamins works to widen the hair shaft and awaken dormant follicles, restoring your hair's natural density and luxurious volume."
    },
    {
      title: "SPLIT AND BRITTLE ENDS",
      image: imgHair4,
      desc: "Split ends are the result of extreme dryness and structural damage. Genesis infuses your hair with deep-penetrating hydration and lipid-restoring compounds, sealing the cuticle and preventing the micro-fractures that lead to breakage."
    },
    {
      title: "INCREASED OILINESS OR DRYNESS OF HAIR",
      image: imgHair5,
      desc: "Scalp imbalances dictate your hair's texture. By regulating sebum production at the cellular level, Genesis restores harmony to your scalp's microbiome, eliminating excessive grease or chronic flakiness for perfectly balanced hair."
    }
  ],
  skin: [
    {
      title: "PROBLEM SKIN",
      image: imgSkin1,
      desc: "Acne, redness, and chronic inflammation are signs of a compromised skin barrier and internal toxicity. Genesis provides powerful anti-inflammatory botanical extracts and purifying antioxidants to clear your complexion from the inside out."
    },
    {
      title: "OILY SKIN",
      image: imgSkin2,
      desc: "Overactive sebaceous glands are often a symptom of dehydration or hormonal fluctuations. Our formula balances internal hydration levels and regulates lipid production, giving you a matte, healthy glow without stripping your skin."
    },
    {
      title: "DRY SKIN",
      image: imgSkin3,
      desc: "Chronic dryness means your skin cannot hold moisture. Genesis contains highly specialized ceramides and hyaluronic acid precursors that lock hydration into the deep epidermal layers, banishing tightness and restoring supple elasticity."
    },
    {
      title: "PEELING SKIN",
      image: imgSkin4,
      desc: "Flaking and peeling occur when cell turnover is erratic and the skin barrier is broken. Genesis accelerates healthy skin regeneration while reinforcing the lipid barrier, ensuring smooth, continuous, and radiant skin texture."
    }
  ]
};

const TargetAudience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const handleOpenModal = (item) => {
    setActiveCard(item);
    // Slight delay ensures the DOM updates with data before animating
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveCard(null), 700); // Wait for slower CSS animation to finish
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="target-section" ref={sectionRef}>
      <div className={`target-container ${isVisible ? 'animate-in' : ''}`}>
        <div className="target-left">
          <h2 className="target-title">
            WHO MIGHT<br/>
            NEED <span className="highlight">GENESIS?</span>
          </h2>
        </div>
        
        <div className="target-right">
          <div className="target-column delay-1">
            <h3 className="column-title">NAILS</h3>
            <ul className="target-list">
              {needsData.nails.map((item, idx) => (
                <li key={idx} onClick={() => handleOpenModal(item)}>{item.title}</li>
              ))}
            </ul>
          </div>
          
          <div className="target-column delay-2">
            <h3 className="column-title">HAIR</h3>
            <ul className="target-list">
              {needsData.hair.map((item, idx) => (
                <li key={idx} onClick={() => handleOpenModal(item)}>{item.title}</li>
              ))}
            </ul>
          </div>
          
          <div className="target-column delay-3">
            <h3 className="column-title">SKIN</h3>
            <ul className="target-list">
              {needsData.skin.map((item, idx) => (
                <li key={idx} onClick={() => handleOpenModal(item)}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Overlay for clicking a need */}
      <div className={`target-modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={handleCloseModal}>
        <div className="target-modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-modal" onClick={handleCloseModal}>×</button>
          {activeCard && (
            <>
              <div className="modal-image">
                <img src={activeCard.image} alt={activeCard.title} />
              </div>
              <div className="modal-text">
                <h3>{activeCard.title}</h3>
                <p>{activeCard.desc}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
