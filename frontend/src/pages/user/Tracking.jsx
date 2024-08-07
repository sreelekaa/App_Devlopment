// src/pages/Tracking.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from '../../components/Navbar';
import '../../assets/css/Tracking.css';

const trackingData = {
  '12345678': {
    vendorName: 'Vendor A',
    buyerName: 'Buyer A',
    currentState: 'In Transit',
    travels: [
      { date: '2024-07-25', location: 'City A' },
      { date: '2024-07-26', location: 'City B' },
      { date: '2024-07-27', location: 'City C' },
    ],
    amount: '$1000',
    content: '10kg wood',
  },
  '87654321': {
    vendorName: 'Vendor B',
    buyerName: 'Buyer B',
    currentState: 'Delivered',
    travels: [
      { date: '2024-07-20', location: 'City D' },
      { date: '2024-07-21', location: 'City E' },
      { date: '2024-07-22', location: 'City F' },
    ],
    amount: '$2000',
    content: '5kg potatoes',
  },
  // Add more mock data as needed
};

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [billDetails, setBillDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTrack = () => {
    if (trackingNumber.length === 8 && trackingData[trackingNumber]) {
      setBillDetails(trackingData[trackingNumber]);
      setError('');
    } else {
      setBillDetails(null);
      setError('Invalid tracking number. Please enter an 8-digit number.');
    }
  };

  const goToSupportPage = () => {
    navigate('/support');
  };

  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <div className="tracking-container">
          <h1 className="tracking-title">Track Your Package</h1>
          <p className="tracking-description">
            Enter your tracking number below to get the latest update on your package. Our system provides real-time updates so you can stay informed every step of the way.
          </p>
          <div className="tracking-form">
            <div className="input-button-group">
              <input
                type="text"
                placeholder="Enter tracking number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="tracking-input"
              />
              <button onClick={handleTrack} className="tracking-button">Track</button>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          {billDetails && (
            <div className="tracking-card">
              <h2>Bill Details</h2>
              <p><strong>Vendor Name:</strong> {billDetails.vendorName}</p>
              <p><strong>Buyer Name:</strong> {billDetails.buyerName}</p>
              <p><strong>Current State:</strong> {billDetails.currentState}</p>
              <p><strong>Amount:</strong> {billDetails.amount}</p>
              <p><strong>Content:</strong> {billDetails.content}</p>
              <h3>Travel History</h3>
              <ul>
                {billDetails.travels.map((travel, index) => (
                  <li key={index}>{travel.date} - {travel.location}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="tracking-details">
            <h2>How It Works</h2>
            <p>Our advanced logistics network allows you to track your package in real-time. From the moment your package is picked up to the final delivery, you will have full visibility.</p>
          </div>
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <ul>
              <li>How do I track my package?</li>
              <li>What should I do if my package is delayed?</li>
              <li>Can I change the delivery address?</li>
            </ul>
          </div>
          <div className="customer-support">
            <h2>Customer Support</h2>
            <p>If you have any issues or inquiries, please contact our 24/7 support team at <a href="mailto:support@transpomaster.com">support@transpomaster.com</a> or call us at (123) 456-7890.</p>
            <button onClick={goToSupportPage} className="support-button">Visit Support Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
