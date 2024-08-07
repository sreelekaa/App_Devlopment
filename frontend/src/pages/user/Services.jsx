import React, { useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import oceanTransportImg from '../../assets/images/oceantransport.jpg';
import airlineWayImg from '../../assets/images/airplane.jpg';
import roadwayImg from '../../assets/images/roadtransport.png';
import warehouseImg from '../../assets/images/Warehouse.jpeg';
import railwayImg from '../../assets/images/railway.jpeg';
import Navbar from '../../components/Navbar';
import '../../assets/css/ServiceCard.css';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    title: 'Ocean Transport',
    description: 'Efficient and economical ocean shipping solutions.',
    image: oceanTransportImg,
    details: 'Our ocean transport services are designed to ensure your goods reach their destination efficiently and economically. We offer comprehensive solutions including container shipping, bulk shipping, and more. Our fleet is equipped with the latest technology to ensure safety and reliability.',
    features: ['Container Shipping', 'Bulk Shipping', 'Refrigerated Transport', 'Customs Clearance'],
    category: 'Transport',
  },
  {
    title: 'Airline Way',
    description: 'Fast and reliable air freight services.',
    image: airlineWayImg,
    details: 'Our air freight services are ideal for time-sensitive shipments. We provide fast and reliable transportation, ensuring your goods arrive on time, every time. Our network spans globally, offering extensive coverage and flexibility.',
    features: ['Express Shipping', 'Global Coverage', 'Customs Handling', 'Temperature Controlled'],
    category: 'Transport',
  },
  {
    title: 'Roadway',
    description: 'Comprehensive roadway transportation services.',
    image: roadwayImg,
    details: 'Our roadway transportation services cover both local and long-distance hauling. We ensure that your goods are transported safely and on time with our fleet of modern trucks and experienced drivers.',
    features: ['Local & Long-distance Hauling', 'Timely Delivery', 'GPS Tracking', 'Experienced Drivers'],
    category: 'Transport',
  },
  {
    title: 'Warehouse Distribution',
    description: 'Secure and scalable warehousing solutions.',
    image: warehouseImg,
    details: 'Our warehousing solutions offer secure and scalable options for storing your goods. We provide modern facilities equipped with the latest technology for inventory management, ensuring your products are safe and easily accessible.',
    features: ['Modern Facilities', 'Inventory Management', '24/7 Security', 'Scalable Solutions'],
    category: 'Warehouse',
  },
  {
    title: 'Railway Services',
    description: 'Reliable and efficient railway transport solutions.',
    image: railwayImg,
    details: 'Our railway transport services offer an efficient and reliable way to move goods over long distances. With our extensive rail network and logistics expertise, we provide cost-effective solutions for bulk and container shipments.',
    features: ['Bulk Transport', 'Container Shipping', 'Scheduled Departures', 'Track and Trace'],
    category: 'Transport',
  },
];

const Services = () => {
  const [filters, setFilters] = useState({ category: '' });
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleInfoClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBookNowClick = () => {
    navigate('/shipments');
  };

  const filteredServices = servicesData.filter(
    (service) => !filters.category || service.category === filters.category
  );

  return (
    <div className="services-page">
      <Navbar />
      <div className="filter">
        <h3>Filter Services</h3>
        <div className="filter-group">
          <h4>Category</h4>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ''}
              onChange={handleFilterChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Transport"
              checked={filters.category === 'Transport'}
              onChange={handleFilterChange}
            />
            Transport
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="Warehouse"
              checked={filters.category === 'Warehouse'}
              onChange={handleFilterChange}
            />
            Warehouse
          </label>
        </div>
      </div>
      <div className="services-list">
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            onInfoClick={() => handleInfoClick(service)}
            onBookNowClick={handleBookNowClick}
          />
        ))}
      </div>

      {selectedService && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <h2>{selectedService.title}</h2>
            <div className="modal-content">
              <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
              <p>{selectedService.details}</p>
              <h3>Features:</h3>
              <ul>
                {selectedService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
