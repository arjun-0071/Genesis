import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ title, description, image, slug, index = 0 }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`blog-card-wide ${isEven ? 'even' : 'odd'}`}>
      <Link to={`/blogs/article/${slug}`} className="blog-card-wide-image-link">
        {image ? (
          <img src={image} alt={title} className="blog-card-wide-image" />
        ) : (
          <div className="blog-card-wide-placeholder">Image Coming Soon</div>
        )}
      </Link>
      <div className="blog-card-wide-content">
        <Link to={`/blogs/article/${slug}`} className="blog-card-wide-title-link">
          <h2 className="blog-card-wide-title">{title}</h2>
        </Link>
        <p className="blog-card-wide-description">{description}</p>
        <Link to={`/blogs/article/${slug}`} className="btn-read-more-wide">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
