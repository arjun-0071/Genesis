import React from 'react';
import './PageStyles.css';

const Contact = () => {
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
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="How can we assist you today?" required></textarea>
          </div>
          <button type="submit" className="btn-primary">
            SEND MESSAGE
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
