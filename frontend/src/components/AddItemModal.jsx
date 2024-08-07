// src/components/AddItemModal.jsx
import React, { useState } from 'react';
import '../assets/css/TransportServices.css'; // Assuming this contains the necessary styles

const AddItemModal = ({ onAddItem, onClose }) => {
  const [license, setLicense] = useState('');
  const [driverName, setDriverName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [registration, setRegistration] = useState('valid');

  const handleSubmit = () => {
    if (license && driverName && capacity) {
      onAddItem({
        license,
        driverName,
        capacity: parseInt(capacity, 10),
        registration,
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Roadway</h2>
        <div className="form-group">
          <label>License:</label>
          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Driver Name:</label>
          <input
            type="text"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Registration:</label>
          <select
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          >
            <option value="valid">Valid</option>
            <option value="invalid">Invalid</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Add Roadway</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddItemModal;
