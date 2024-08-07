// src/components/TransportServices.js
import React, { useState } from 'react';
import AddItemModal from '../../components/AddItemModal';
import '../../assets/css/TransportServices.css';

const TransportServices = () => {
  const [activeTab, setActiveTab] = useState('roadway');
  const [viewItem, setViewItem] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const data = {
    roadway: [
      { license: 'LKCVKJ', driverName: 'Timothy Rast', capacity: 45000, registration: 'valid' },
      { license: 'BGBX92P', driverName: 'Bill Paulson', capacity: 35000, registration: 'valid' },
    ],
    airway: [
      { flightNumber: 'AA123', pilotName: 'John Doe', capacity: 20000, registration: 'valid' },
      { flightNumber: 'BA456', pilotName: 'Jane Smith', capacity: 15000, registration: 'valid' },
    ],
    water: [
      { vesselNumber: 'W1234', captainName: 'Paul Jones', capacity: 50000, registration: 'valid' },
      { vesselNumber: 'W5678', captainName: 'Lisa Brown', capacity: 60000, registration: 'valid' },
    ],
    warehouse: [
      { warehouseID: 'WH123', managerName: 'Michael Scott', capacity: 80000, status: 'valid' },
      { warehouseID: 'WH456', managerName: 'Pam Beesly', capacity: 90000, status: 'valid' },
    ],
  };

  const handleView = (item) => {
    setViewItem(item);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
  };

  const handleAddItem = (item) => {
    data[activeTab].push(item);
    setIsAddingNew(false);
  };

  const renderTable = () => {
    const currentData = data[activeTab];

    return (
      <table className="truck-table">
        <thead>
          <tr>
            {Object.keys(currentData[0]).map((key) => (
              <th key={key}>{key.replace(/([A-Z])/g, ' $1')}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
              <td>
                <button className="view" onClick={() => handleView(item)}>View</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="transport-services">
      <h3>Add New Transport</h3>
      <button className="add-new" onClick={handleAddNew}>Add New</button>
      <div className="tabs">
        <div className={`tab ${activeTab === 'roadway' ? 'active' : ''}`} onClick={() => setActiveTab('roadway')}>
          Roadway
        </div>
        <div className={`tab ${activeTab === 'airway' ? 'active' : ''}`} onClick={() => setActiveTab('airway')}>
          Airway
        </div>
        <div className={`tab ${activeTab === 'water' ? 'active' : ''}`} onClick={() => setActiveTab('water')}>
          Water Transport
        </div>
        <div className={`tab ${activeTab === 'warehouse' ? 'active' : ''}`} onClick={() => setActiveTab('warehouse')}>
          Warehouse Distribution
        </div>
      </div>
      <div className="table-container">{renderTable()}</div>
      <div className="pagination">
        <div className="buttongroup">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
        <span>1–10 of 24</span>
      </div>

      {viewItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setViewItem(null)}>&times;</span>
            <h4>View Transport Details</h4>
            <div className="form-group">
              {Object.entries(viewItem).map(([key, value]) => (
                <div key={key}>
                  <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input type="text" value={value} readOnly />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isAddingNew && (
        <AddItemModal
          type={activeTab}
          onAddItem={handleAddItem}
          onClose={() => setIsAddingNew(false)}
        />
      )}
    </div>
  );
};

export default TransportServices;
