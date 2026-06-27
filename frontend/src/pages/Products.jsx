import React from 'react';
import './PageStyles.css';

const Products = () => {
  return (
    <div className="page-container empty-state">
      <div className="emoji-container">
        <span className="sad-emoji">😞</span>
      </div>
      <h1>No products available yet</h1>
      <p>Our lab is finalizing the next generation of premium beauty supplements. Stay tuned.</p>
    </div>
  );
};
export default Products;
