import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articleContent } from '../data/articleContent';

const BlogArticle = () => {
  const { slug } = useParams();
  
  // Convert slug back to a readable title (basic formatting)
  const formatTitle = (str) => {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const article = articleContent[slug];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', color: 'white', padding: '150px 4rem 50px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/blogs" style={{ color: 'var(--primary)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Blogs
      </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '2.5rem', lineHeight: '1.2' }}>
        {formatTitle(slug)}
      </h1>
      
      {article ? (
        <>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            borderRadius: '16px',
            marginBottom: '3rem',
            overflow: 'hidden'
          }}>
            <img 
              src={article.image} 
              alt={formatTitle(slug)} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="article-body">
            {article.content}
          </div>
        </>
      ) : (
        <>
          <div style={{ 
            width: '100%', 
            height: '400px', 
            backgroundColor: '#2a2a2a', 
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            <p style={{ color: '#777', fontSize: '1.2rem' }}>Hero Image Not Found</p>
          </div>
          <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
            <p>This is a placeholder page. The full content for this topic has not been added yet, but check back soon!</p>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default BlogArticle;
