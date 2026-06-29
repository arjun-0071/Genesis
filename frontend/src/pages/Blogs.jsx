import React, { useState, useRef } from 'react';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const allBlogs = [
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
    },
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
    },
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

  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);
  const blogsPerPage = 4;
  
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} style={{ height: '100vh', overflowY: 'auto', padding: '120px 4rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontWeight: '300' }}>
          All <span style={{ color: 'var(--primary)', fontFamily: '"Alex Brush", cursive' }}>Blogs</span>
        </h1>
        <p style={{ color: '#a0a0a0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore our complete collection of insights across hair, skin, and nail care.
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '0',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {currentBlogs.map((blog, index) => (
          <BlogCard 
            key={indexOfFirstBlog + index}
            index={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem', marginBottom: '2rem' }}>
          <button 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-arrow"
          >
            &#8592;
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: currentPage === number ? 'var(--primary)' : 'transparent',
                  color: currentPage === number ? '#fff' : '#a0a0a0',
                  border: currentPage === number ? 'none' : '1px solid #444',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {number}
              </button>
            ))}
          </div>

          <button 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-arrow"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
