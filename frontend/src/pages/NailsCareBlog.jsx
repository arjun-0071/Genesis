import React from 'react';
import BlogCard from '../components/BlogCard';

const NailsCareBlog = () => {
  const blogs = [
    {
      title: "5 Step Weekly Nail Care Routine",
      description: "A beginner-friendly guide to keeping your nails clean, trimmed, and moisturized every week using basic tools you already have at home.",
      image: "/assets/blog_topic_images/5_Step_Weekly_Nail_Care_ Routine.jpg",
      slug: "5-step-weekly-nail-care-routine"
    },
    {
      title: "How to Do a Salon Perfect Manicure at Home",
      description: "Step-by-step instructions for achieving a professional looking manicure without spending money at a salon, from prepping the cuticles to applying polish.",
      image: "/assets/blog_topic_images/How_to_Do_a_Salon_Perfect_Manicure_at_Home.jpeg",
      slug: "salon-perfect-manicure-at-home"
    },
    {
      title: "3 Easy Nail Art Designs Anyone Can Do",
      description: "Fun and simple nail art ideas like polka dots and basic stripes that require zero artistic skill and only a few polish colors.",
      image: "/assets/blog_topic_images/3_Easy_Nail_Art_Designs_Anyone_Can_Do.jpg",
      slug: "3-easy-nail-art-designs"
    }
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '120px 4rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: '300' }}>
          Nails Care <span style={{ color: 'var(--primary)', fontFamily: '"Alex Brush", cursive' }}>Blogs</span>
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover the best tips and routines to keep your nails strong, healthy, and beautiful.
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {blogs.map((blog, index) => (
          <BlogCard 
            key={index}
            index={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default NailsCareBlog;
