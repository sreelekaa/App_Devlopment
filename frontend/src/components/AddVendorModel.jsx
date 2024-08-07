// src/components/AddVendorModal.jsx
import React, { useState } from 'react';
import '../assets/css/Vendor.css'; // Assuming this contains the necessary styles

const AddVendorModal = ({ onAddVendor, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = () => {
    if (name && contact && email && service) {
      onAddVendor({
        id: Date.now(), // Simple unique ID generation
        name,
        contact,
        email,
        service
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Vendor</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Service:
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add Vendor</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddVendorModal;
