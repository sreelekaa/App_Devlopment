// src/pages/Support/Support.jsx
import React from 'react';
import Navbar from '../../components/Navbar';
import '../../assets/css/Support.css';

const Support = () => {
  return (
    <div className="support-page">
      <Navbar />
      <div className="support-container">
        <h1>Customer Support</h1>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any issues or inquiries, please contact our 24/7 support team:</p>
          <p>Email: <a href="mailto:support@transpomaster.com">support@transpomaster.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </section>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>How do I track my package?</li>
            <li>What should I do if my package is delayed?</li>
            <li>Can I change the delivery address?</li>
          </ul>
        </section>
        <section className="form-section">
          <h2>Submit an Inquiry</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Support;
