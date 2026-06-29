import React from 'react';
import BlogCard from '../components/BlogCard';

const HairCareBlog = () => {
  const blogs = [
    {
      title: "5 Ways to Protect Your Hair from Heat Damage",
      description: "Easy tips for safely using flat irons and blow dryers without frying your ends or causing breakage. This includes the importance of using heat protectant sprays and why you should absolutely never use hot tools on wet hair.",
      image: "/assets/blog_topic_images/5_Ways_to_Protect_Your_Hair_from_Heat_Damage.webp",
      slug: "5-ways-to-protect-your-hair-from-heat-damage"
    },
    {
      title: "Why Getting Regular Trims Helps Your Hair Grow",
      description: "An explanation of why cutting off split ends every few months keeps your hair looking thick and healthy. You will learn how ignoring those dry ends actually causes them to travel further up the hair shaft and snap off completely.",
      image: "/assets/blog_topic_images/Why_Getting_Regular_Trims_Helps_Your_Hair_Grow.webp",
      slug: "why-getting-regular-trims-helps-your-hair-grow"
    },
    {
      title: "3 Quick Hairstyles for Busy Mornings",
      description: "Fast and easy bun, braid, and ponytail tricks to save time and look put together on a bad hair day. These styles take less than five minutes to do and work perfectly even if you have not had the time to wash your hair yet.",
      image: "/assets/blog_topic_images/3_Quick_Hairstyles_for_Busy_Mornings.webp",
      slug: "3-quick-hairstyles-for-busy-mornings"
    }
  ];

  return (
    <div style={{ height: '100vh', overflowY: 'auto', padding: '120px 4rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: '300' }}>
          Hair Care <span style={{ color: 'var(--primary)', fontFamily: '"Alex Brush", cursive' }}>Blogs</span>
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Discover the secrets to maintaining strong, vibrant, and healthy hair every day.
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

export default HairCareBlog;
