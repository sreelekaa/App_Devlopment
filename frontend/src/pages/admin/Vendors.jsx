// src/components/Vendors.jsx
import React, { useState } from 'react';
import AddVendorModal from '../../components/AddVendorModel';
import '../../assets/css/Vendor.css';

const Vendors = () => {
  const [vendors, setVendors] = useState([
    // Example data
    { id: 1, name: 'Global Transport Inc.', contact: 'Alice Johnson', email: 'alice@globaltransport.com', service: 'Transportation' },
    { id: 2, name: 'Safe Storage Ltd.', contact: 'Bob Brown', email: 'bob@safestorage.com', service: 'Warehousing' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddVendor = (vendor) => {
    setVendors([...vendors, vendor]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="vendors">
      <h3>Vendors</h3>
      <button className="add-new" onClick={handleOpenModal}>Add New Vendor</button>
      <div className="table-container">
        <table className="vendors-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.name}</td>
                <td>{vendor.contact}</td>
                <td>{vendor.email}</td>
                <td>{vendor.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <AddVendorModal onAddVendor={handleAddVendor} onClose={handleCloseModal} />}
    </div>
  );
};

export default Vendors;
