// src/components/Inventory.js
import React, { useState } from 'react';
import InventoryItem from '../../components/InventoryItem';
import SearchBar from '../../components/SearchBar';
import '../../assets/css/Inventory.css'; // Import CSS for styling
import Navbar from '../../components/Navbar';
import ServiceModal from '../../components/ServiceModal'; // Import the ServiceModal component
import OakWood from '../../assets/images/oak wood.jpg';
import pinewood from '../../assets/images/pinewood.jpg';
import maplewood from '../../assets/images/maplewood.jpg'
import teakwood from '../../assets/images/Teakwood.jpg'
import mahoganywood from '../../assets/images/Mahogany Wood.jpg';
import Bamboo from '../../assets/images/bamboo.jpg';
import Steelrod from '../../assets/images/steelrod.jpeg'
import steelplate from '../../assets/images/Steelplate.jpeg';
import steelbeam from '../../assets/images/SteelBeam.jpeg';
import aluminiumsheet from '../../assets/images/AlumininumSheet.jpeg';
import copperwire from '../../assets/images/copper wire.jpg';
import ironbar from '../../assets/images/ironbar.jpeg';
import brassheet from '../../assets/images/brasssheet.jpg';
import stainlesssheet from '../../assets/images/stainless sheet.jpeg';
import bronzeplate from '../../assets/images/bronzeplate.jpeg';
import redwood from '../../assets/images/redwood.jpeg';
import cedarwood from '../../assets/images/cedarwood.jpeg';
import sprucewood from '../../assets/images/sprucewood.jpeg';
import galavanizedsteel from '../../assets/images/galavanizedsteel.jpeg';
import carbonsteel from '../../assets/images/carbonsteel.jpeg';


const mockData = [
  { id: 1, name: 'Oak Wood', quantity: 100, type: 'Wood', imageUrl: OakWood },

  { id: 2, name: 'Pine Wood', quantity: 150, type: 'Wood', imageUrl: pinewood },
  { id: 3, name: 'Maple Wood', quantity: 75, type: 'Wood', imageUrl: maplewood},
  { id: 4, name: 'Teak Wood', quantity: 50, type: 'Wood', imageUrl: teakwood },
  { id: 5, name: 'Mahogany Wood', quantity: 30, type: 'Wood', imageUrl: mahoganywood },
  { id: 6, name: 'Bamboo', quantity: 200, type: 'Wood', imageUrl: Bamboo },
  { id: 7, name: 'Steel Rod', quantity: 120, type: 'Steel', imageUrl: Steelrod },
  { id: 8, name: 'Steel Plate', quantity: 80, type: 'Steel', imageUrl: steelplate },
  { id: 9, name: 'Steel Beam', quantity: 60, type: 'Steel', imageUrl: steelbeam },
  { id: 10, name: 'Aluminum Sheet', quantity: 90, type: 'Aluminum', imageUrl: aluminiumsheet },
  { id: 11, name: 'Copper Wire', quantity: 100, type: 'Copper', imageUrl: copperwire },
  { id: 12, name: 'Iron Bar', quantity: 70, type: 'Iron', imageUrl: ironbar},
  { id: 13, name: 'Brass Sheet', quantity: 110, type: 'Brass', imageUrl: brassheet },
  { id: 14, name: 'Stainless Steel Pipe', quantity: 40, type: 'Stainless Steel', imageUrl: stainlesssheet },
  { id: 15, name: 'Bronze Plate', quantity: 30, type: 'Bronze', imageUrl: brassheet },
  { id: 16, name: 'Redwood', quantity: 50, type: 'Wood', imageUrl: redwood },
  { id: 17, name: 'Cedar Wood', quantity: 60, type: 'Wood', imageUrl: cedarwood },
  { id: 18, name: 'Spruce Wood', quantity: 90, type: 'Wood', imageUrl: sprucewood },
  { id: 19, name: 'Galvanized Steel', quantity: 75, type: 'Steel', imageUrl: galavanizedsteel },
  { id: 20, name: 'Carbon Steel', quantity: 85, type: 'Steel', imageUrl: carbonsteel },
  // Add more mock items as needed
];

const Inventory = () => {
  const [inventory, setInventory] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowServiceModal(true);
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-page">
      <Navbar />
      <header>
        <h1>Inventory Management</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="inventory-list">
        {filteredInventory.map(item => (
          <InventoryItem
            key={item.id}
            item={item}
            onOrderClick={handleOrderClick}
          />
        ))}
      </div>
      {showServiceModal && (
        <ServiceModal 
          item={selectedItem} 
          onClose={() => setShowServiceModal(false)} 
        />
      )}
    </div>
  );
};

export default Inventory;
