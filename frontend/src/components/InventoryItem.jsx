// src/components/InventoryItem.js
import React from 'react';
import '../assets/css/InventoryItem.css'; // Ensure you have CSS for styling

const InventoryItem = ({ item, onOrderClick }) => {
  return (
    <div className="inventory-item-card">
      {/* Image of the item */}
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      
      {/* Item details */}
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => onOrderClick(item)}>Order</button>
      </div>
    </div>
  );
};

export default InventoryItem;
