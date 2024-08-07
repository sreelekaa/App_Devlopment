// src/components/AddSupplierModal.jsx
import React, { useState } from 'react';
import '../assets/css/Suppliers.css'; // Assuming this contains the necessary styles

const AddSupplierModal = ({ onAddSupplier, onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');

  const handleSubmit = () => {
    if (name && contact && email && product) {
      onAddSupplier({
        id: Date.now(), // Simple unique ID generation
        name,
        contact,
        email,
        product
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Supplier</h2>
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
          Product:
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add Supplier</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddSupplierModal;
