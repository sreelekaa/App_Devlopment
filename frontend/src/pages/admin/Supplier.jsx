// src/components/Suppliers.jsx
import React, { useState } from 'react';
import AddSupplierModal from '../../components/AddSupplierModal';
import '../../assets/css/Suppliers.css';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([
    // Example data
    { id: 1, name: 'ABC Logistics', contact: 'John Doe', email: 'john@abc.com', product: 'Wood' },
    { id: 2, name: 'XYZ Warehousing', contact: 'Jane Smith', email: 'jane@xyz.com', product: 'Steel' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSupplier = (supplier) => {
    setSuppliers([...suppliers, supplier]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="suppliers">
      <h3>Suppliers</h3>
      <button className="add-new" onClick={handleOpenModal}>Add New Supplier</button>
      <div className="table-container">
        <table className="suppliers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.name}</td>
                <td>{supplier.contact}</td>
                <td>{supplier.email}</td>
                <td>{supplier.product}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <AddSupplierModal onAddSupplier={handleAddSupplier} onClose={handleCloseModal} />}
    </div>
  );
};

export default Suppliers;
