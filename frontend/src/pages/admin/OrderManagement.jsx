import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/OrderManagement.css';

const OrderManagement = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    amount: '',
    customerName: '',
    contactInfo: '',
    orderEntry: '',
  });
  const [orders, setOrders] = useState([
    { id: 1, name: 'Weissnat - Schultz', amount: '$299,149.00', logo: 'path/to/logo1.png' },
    { id: 2, name: 'Weimann - Shanahan', amount: '$179,136.00', logo: 'path/to/logo2.png' },
    { id: 3, name: 'Buckridge, Swaniawski and Auer', amount: '$683,688.00', logo: 'path/to/logo3.png' },
    { id: 4, name: 'Walter Inc', amount: '$760,381.00', logo: 'path/to/logo4.png' },
    { id: 5, name: 'Abernathy - Jakubowski', amount: '$281,267.00', logo: 'path/to/logo5.png' },
    { id: 6, name: 'Jakubowski, Bechtelar and Skiles', amount: '$382,021.00', logo: 'path/to/logo6.png' },
    { id: 7, name: 'Rowe, Kassulke and Olson', amount: '$198,664.00', logo: 'path/to/logo7.png' },
    { id: 8, name: 'Lueilwitz - Kiehn', amount: '$486,896.00', logo: 'path/to/logo8.png' },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (order = null) => {
    if (order) {
      setFormData({
        id: order.id,
        title: order.name,
        amount: order.amount,
        customerName: '',
        contactInfo: '',
        orderEntry: '',
      });
      setIsEditing(true);
    } else {
      setFormData({
        id: null,
        title: '',
        amount: '',
        customerName: '',
        contactInfo: '',
        orderEntry: '',
      });
      setIsEditing(false);
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data here
    if (!formData.title || !formData.amount || !formData.customerName || !formData.contactInfo || !formData.orderEntry) {
      setError('All fields are required');
      return;
    }

    if (isEditing) {
      // Update the order
      setOrders(orders.map(order => (order.id === formData.id ? { ...order, name: formData.title, amount: formData.amount } : order)));
    } else {
      // Add a new order
      const newOrder = {
        id: orders.length + 1,
        name: formData.title,
        amount: formData.amount,
        logo: 'path/to/new/logo.png', // Update with actual logo path
      };
      setOrders([...orders, newOrder]);
    }

    // Reset the form and close the modal
    setFormData({
      id: null,
      title: '',
      amount: '',
      customerName: '',
      contactInfo: '',
      orderEntry: '',
    });
    closeModal();
  };

  const handleDelete = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="order-management-container">
      <div className="order-management-header">
        <h2>Orders</h2>
        <button className="create-button" onClick={() => openModal()}>Create</button>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order title</th>
            <th>Open deals amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>
                <img src={order.logo} alt={order.name} className="order-logo" />
                {order.name}
              </td>
              <td>{order.amount}</td>
              <td>
                <button className="action-button edit-button" onClick={() => openModal(order)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="action-button delete-button" onClick={() => handleDelete(order.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{isEditing ? 'Edit Order' : 'Add New Order'}</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <label>
                Order Title:
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
              </label>
              <label>
                Open Deals Amount:
                <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} required />
              </label>
              <label>
                Customer Name:
                <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} required />
              </label>
              <label>
                Contact Info:
                <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} required />
              </label>
              <label>
                Order Entry:
                <input type="text" name="orderEntry" value={formData.orderEntry} onChange={handleInputChange} required />
              </label>
              <button type="submit" className="modal-create-button">{isEditing ? 'Update' : 'Create'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
