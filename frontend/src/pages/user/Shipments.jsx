import React, { useState } from 'react';
import oceanTransportImg from '../../assets/images/oceantransport.jpg';
import airlineWayImg from '../../assets/images/airplane.jpg';
import roadwayImg from '../../assets/images/roadtransport.png';
import warehouseImg from '../../assets/images/Warehouse.jpeg';
import railwayImg from '../../assets/images/railway.jpeg';
import Navbar from '../../components/Navbar';
import '../../assets/css/Shipments.css';

const servicesData = [
  { 
    title: 'Ocean Transport', 
    image: oceanTransportImg, 
    description: 'Reliable and cost-effective solution for shipping goods across seas and oceans.',
    cost: '$200',
    paymentOptions: ['Credit Card', 'UPI', 'Net Banking', 'Debit Card']
  },
  { 
    title: 'Airline Way', 
    image: airlineWayImg, 
    description: 'Fast and efficient air cargo services for urgent and time-sensitive shipments.',
    cost: '$500',
    paymentOptions: ['Credit Card', 'UPI', 'Debit Card']
  },
  { 
    title: 'Roadway', 
    image: roadwayImg, 
    description: 'Flexible and convenient land transport for deliveries across cities and regions.',
    cost: '$150',
    paymentOptions: ['Credit Card', 'Net Banking', 'Debit Card']
  },
  { 
    title: 'Warehouse Distribution', 
    image: warehouseImg, 
    description: 'Secure and organized storage solutions with effective distribution channels.',
    cost: '$100',
    paymentOptions: ['Credit Card', 'Net Banking', 'Debit Card']
  },
  { 
    title: 'Railway Services', 
    image: railwayImg, 
    description: 'Economical and environmentally friendly rail transport for bulk and large shipments.',
    cost: '$300',
    paymentOptions: ['Credit Card', 'UPI', 'Net Banking', 'Debit Card']
  },
];

const Shipments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [details, setDetails] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [upiId, setUpiId] = useState('');
  const [netBankingDetails, setNetBankingDetails] = useState({});
  const [address, setAddress] = useState('');
  const [showModal, setShowModal] = useState(false);

  const validateCardNumber = (number) => /^(\d{4}\s){3}\d{4}$/.test(number);
  const validateCvv = (number) => /^\d{3}$/.test(number);

  const handleServiceChange = (event) => setSelectedService(event.target.value);
  const handlePaymentChange = (event) => setSelectedPayment(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !selectedService ||
      !customerName ||
      !contactInfo ||
      !selectedPayment ||
      !address ||
      ((selectedPayment === 'Credit Card' || selectedPayment === 'Debit Card') &&
      (!cardNumber || !validateCardNumber(cardNumber) || !cvv || !validateCvv(cvv) || !cardHolderName))
    ) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    // Prepare booking details
    const bookingDetails = {
      selectedService,
      customerName,
      contactInfo,
      details,
      selectedPayment,
      cardHolderName,
      cardNumber,
      cvv,
      expiryDate,
      upiId,
      netBankingDetails,
      address
    };

    // Store booking details in localStorage
    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    // Show modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.href = '/confirmation';
  };

  const serviceDetails = servicesData.find(service => service.title === selectedService);

  return (
    <div className="shipments-page">
      <Navbar />
      <h1>Book Your Shipment</h1>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Select Service:
          <select value={selectedService} onChange={handleServiceChange} required>
            <option value="" disabled>Select a service</option>
            {servicesData.map((service, index) => (
              <option key={index} value={service.title}>{service.title}</option>
            ))}
          </select>
        </label>

        {serviceDetails && (
          <div className="service-details">
            <h2>Service Details</h2>
            <img src={serviceDetails.image} alt={serviceDetails.title} />
            <p><strong>Description:</strong> {serviceDetails.description}</p>
            <p><strong>Cost:</strong> {serviceDetails.cost}</p>
            <label>
              Payment Option:
              <select value={selectedPayment} onChange={handlePaymentChange} required>
                <option value="" disabled>Select a payment method</option>
                {serviceDetails.paymentOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {(selectedPayment === 'Credit Card' || selectedPayment === 'Debit Card') && (
          <div className="payment-details">
            <label>
              Card Holder Name:
              <input
                type="text"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                required
              />
            </label>
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                placeholder="1234 5678 9012 3456"
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="123"
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="MM/YY"
              />
            </label>
          </div>
        )}

        {selectedPayment === 'UPI' && (
          <div className="payment-details">
            <label>
              UPI ID:
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        {selectedPayment === 'Net Banking' && (
          <div className="payment-details">
            <label>
              Account Number:
              <input
                type="text"
                value={netBankingDetails.accountNumber || ''}
                onChange={(e) => setNetBankingDetails({ ...netBankingDetails, accountNumber: e.target.value })}
                required
              />
            </label>
            <label>
              IFSC Code:
              <input
                type="text"
                value={netBankingDetails.ifscCode || ''}
                onChange={(e) => setNetBankingDetails({ ...netBankingDetails, ifscCode: e.target.value })}
                required
              />
            </label>
          </div>
        )}

        <label>
          Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Information:
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Additional Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          <input type="checkbox" required />
          I agree to the <a href="/terms" target="_blank">terms and conditions</a>.
        </label>
        <button type="submit">Book Now</button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            <h2>Booking Successful!</h2>
            <p>Your shipment has been booked successfully.</p>
            {/* <button onClick={closeModal}>Go to Confirmation Page</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipments;
