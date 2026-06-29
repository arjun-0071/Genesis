import React from 'react';
import BlogCard from '../components/BlogCard';

const SkinCareBlog = () => {
  const blogs = [
    {
      title: "A Simple 3 Step Morning Skincare Routine",
      description: "A breakdown of the basic cleanse, moisturize, and protect steps you need to start your day with fresh and healthy skin.",
      image: "/assets/blog_topic_images/A_Simple_3_Step_Morning_Skincare_Routine.webp",
      slug: "simple-3-step-morning-skincare-routine"
    },
    {
      title: "Why You Need to Wear Sunscreen Every Day",
      description: "An easy explanation of how daily sun protection prevents early aging and dark spots, even when it is cloudy outside.",
      image: "/assets/blog_topic_images/Why_You_Need_to_Wear_Sunscreen_Every_Day.jpg",
      slug: "why-you-need-to-wear-sunscreen-every-day"
    },
    {
      title: "5 Natural Ways to Hydrate Dry Skin at Home",
      description: "Quick and easy home remedies using common ingredients like aloe vera and honey to soothe dry and flaky skin.",
      image: "/assets/blog_topic_images/5_Natural_Ways_to_Hydrate_Dry_Skin_at_Home.webp",
      slug: "5-natural-ways-to-hydrate-dry-skin-at-home"
    },
    {
      title: "How Drinking More Water Changes Your Skin",
      description: "A look at the simple connection between staying hydrated throughout the day and achieving a natural, healthy glow.",
      image: "/assets/blog_topic_images/How_Drinking_More_Water_Changes_Your_Skin.jpg",
      slug: "how-drinking-more-water-changes-your-skin"
    }
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '120px 4rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: '300' }}>
          Skin Care <span style={{ color: 'var(--primary)', fontFamily: '"Alex Brush", cursive' }}>Blogs</span>
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Expert tips and simple routines for maintaining a glowing, healthy complexion.
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

export default SkinCareBlog;
