import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    // Clear authentication or perform other logout logic
    // Example: localStorage.removeItem('authToken');
    window.location.href = '/'; // Redirect to home page or login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" style={{ textDecoration: 'none', color: '#333' }}>TranspoMaster</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/services">Services</a></li>
        <li><a href="/shipments">Shipments</a></li>
        <li><a href="/inventory">Inventory</a></li>
        <li><a href="/tracking">Tracking</a></li>
        <li><a href="/support">Support</a></li>
        <li className="profile-container">
          <button className="profile-icon" onClick={toggleDropdown}>
            <FaUserCircle size={24} />
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {/* <li><a href="/account">Account</a></li> */}
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
