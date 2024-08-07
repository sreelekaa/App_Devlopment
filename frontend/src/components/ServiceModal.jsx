import React, { useState } from 'react';
import './../assets/css/ServiceModal.css'; // Import CSS for styling

const ServiceModal = ({ item, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    upiId: '',
    bankName: '',
    accountNumber: ''
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    alert('Order placed successfully!');
    onClose();
  };

  return (
    <div className="service-modal-overlay">
      <div className="service-modal">
        <h2>Place Order for {item.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Payment Method:
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="netBanking">Net Banking</option>
            </select>
          </label>

          {paymentMethod === 'card' && (
            <>
              <label>
                Card Number:
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Card Holder:
                <input
                  type="text"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                CVV:
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </>
          )}

          {paymentMethod === 'upi' && (
            <label>
              UPI ID:
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                required
              />
            </label>
          )}

          {paymentMethod === 'netBanking' && (
            <>
              <label>
                Bank Name:
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Account Number:
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </>
          )}

          <button type="submit">Submit</button>
        </form>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ServiceModal;
