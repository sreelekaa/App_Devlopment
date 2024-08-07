// src/components/AddInventoryModal.jsx
import React, { useState, useEffect } from 'react';
import '../assets/css/Inventory.css';

const AddInventoryModal = ({ itemToEdit, onAddInventory, onEditInventory, onClose }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
      setLocation(itemToEdit.location);
    }
  }, [itemToEdit]);

  const handleSubmit = () => {
    const newItem = {
      id: itemToEdit ? itemToEdit.id : Date.now(),
      name,
      quantity: parseInt(quantity, 10),
      location,
    };

    if (itemToEdit) {
      onEditInventory(newItem);
    } else {
      onAddInventory(newItem);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{itemToEdit ? 'Edit Item' : 'Add New Item'}</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>{itemToEdit ? 'Save Changes' : 'Add Item'}</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddInventoryModal;
