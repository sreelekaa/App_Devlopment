import React, { useState } from 'react';
import AddInventoryModal from '../../components/AddInventoryModal';
import '../../assets/css/AdminInventory.css';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Item 1', quantity: 100, location: 'Warehouse A' },
    { id: 2, name: 'Item 2', quantity: 50, location: 'Warehouse B' },
    { id: 3, name: 'Wood', quantity: 300, location: 'Warehouse C' },
    { id: 4, name: 'Steel', quantity: 150, location: 'Warehouse D' },
    // Add more items as needed up to 20
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleAddInventory = (item) => {
    setInventory([...inventory, item]);
  };

  const handleEditInventory = (updatedItem) => {
    setInventory(inventory.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const handleOpenModal = () => {
    setItemToEdit(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item) => {
    setItemToEdit(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div className="inventory">
      <h3>Inventory Management</h3>
      <button className="add-new" onClick={handleOpenModal}>Add New Item</button>
      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                <td>
                  <div className="action-buttons">
                    <button className="edit" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <AddInventoryModal
          itemToEdit={itemToEdit}
          onAddInventory={handleAddInventory}
          onEditInventory={handleEditInventory}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Inventory;
