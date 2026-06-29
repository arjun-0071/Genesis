import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import HairCareBlog from './pages/HairCareBlog';
import SkinCareBlog from './pages/SkinCareBlog';
import NailsCareBlog from './pages/NailsCareBlog';
import BlogArticle from './pages/BlogArticle';
import Products from './pages/Products';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/hair-care" element={<HairCareBlog />} />
          <Route path="/blogs/skin-care" element={<SkinCareBlog />} />
          <Route path="/blogs/nails-care" element={<NailsCareBlog />} />
          <Route path="/blogs/article/:slug" element={<BlogArticle />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
