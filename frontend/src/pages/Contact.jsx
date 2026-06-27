import React, { useState } from 'react';
import './PageStyles.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://genesis-yxsq.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been received.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>GET IN <span>Touch</span></h1>
      </div>
      <div className="page-content contact-content">
        <div className="contact-info">
          <h2>We're Here to Help</h2>
          <p>Have questions about your regimen? Our clinical consultants are available 24/7 to guide you.</p>
          <ul>
            <li><strong>Email:</strong> support@discovergenesis.com</li>
            <li><strong>Phone:</strong> +1 (800) 555-0199</li>
            <li><strong>HQ:</strong> 144 Precision Drive, BioTech Valley, CA 94000</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Enter your full name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              rows="5" 
              name="message"
              placeholder="How can we assist you today?" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            <div className="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
