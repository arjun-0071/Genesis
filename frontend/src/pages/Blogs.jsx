import React from 'react';
import './PageStyles.css';

const Blogs = () => {
  return (
    <div className="page-container empty-state">
      <div className="emoji-container">
        <span className="sad-emoji">😞</span>
      </div>
      <h1>No blogs found</h1>
      <p>We're currently brewing some amazing clinical insights. Check back soon!</p>
    </div>
  );
};
export default Blogs;
