import React, { useState, useEffect } from 'react';
import '../../assets/css/Dashboard.css';
import AccountSettingsModal from '../../components/SettingsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTruck, faSignOutAlt, faBars, faWarehouse, faShippingFast, faCog, faClipboardList, faFileContract, faUser, faUsers, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import OrderManagement from './OrderManagement';
import TransportationPlanning from './TransportationPlanning';
import WarehouseManagement from './WarehouseManagement';
import ShipmentTracking from './ShippingTracking';
import SupplierManagement from './SupplierManagement';
import ReportingAnalytics from './ReportingAnalytics';
import ComplianceDocumentation from './ComplianceDocumentation';

const data = [
  { name: 'Aug 2023', shipped: 1000, delayed: 240 },
  { name: 'Sep 2023', shipped: 3000, delayed: 139 },
  { name: 'Oct 2023', shipped: 2000, delayed: 980 },
  { name: 'Nov 2023', shipped: 2780, delayed: 390 },
  { name: 'Dec 2023', shipped: 1890, delayed: 480 },
  { name: 'Jan 2024', shipped: 2390, delayed: 380 },
  { name: 'Feb 2024', shipped: 3490, delayed: 430 },
  { name: 'Mar 2024', shipped: 5490, delayed: 530 },
  { name: 'Apr 2024', shipped: 6490, delayed: 620 },
  { name: 'May 2024', shipped: 7490, delayed: 710 },
];

const statData = {
  warehouses: [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 30 },
    { name: 'Apr', value: 25 },
    { name: 'May', value: 35 },
    { name: 'Jun', value: 45 },
  ],
  trucks: [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 40 },
    { name: 'Apr', value: 35 },
    { name: 'May', value: 45 },
    { name: 'Jun', value: 55 },
  ],
  shipments: [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 40 },
    { name: 'Mar', value: 50 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 65 },
  ]
};

const Stats = () => (
  <div className="stats-container">
    <div className="stat-box">
      <div className="stat-icon">
        <FontAwesomeIcon icon={faWarehouse} />
      </div>
      <div className="stat-content">
        <h2>Number of warehouses</h2>
        <p>25</p>
        <div className="stat-graph">
          <ResponsiveContainer width="100%" height={46}>
            <LineChart data={statData.warehouses}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <div className="stat-box">
      <div className="stat-icon">
        <FontAwesomeIcon icon={faTruck} />
      </div>
      <div className="stat-content">
        <h2>Number of trucks</h2>
        <p>68</p>
        <div className="stat-graph">
          <ResponsiveContainer width="100%" height={46}>
            <LineChart data={statData.trucks}>
              <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <div className="stat-box">
      <div className="stat-icon">
        <FontAwesomeIcon icon={faShippingFast} />
      </div>
      <div className="stat-content">
        <h2>Total shipments</h2>
        <p>212</p>
        <div className="stat-graph">
          <ResponsiveContainer width="100%" height={46}>
            <LineChart data={statData.shipments}>
              <Line type="monotone" dataKey="value" stroke="#ff6b6b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
);

const Chart = ({ data }) => (
  <div className="chart-container">
    <h2>Shipment Statistics Over Time</h2>
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorShipped" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDelayed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="shipped" stroke="#8884d8" fillOpacity={1} fill="url(#colorShipped)" />
        <Area type="monotone" dataKey="delayed" stroke="#82ca9d" fillOpacity={1} fill="url(#colorDelayed)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '0px', top: '0px' });
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Michael Scott',
      email: 'michael.scott@dundermifflin.com',
      jobTitle: 'Global Functionality Assistant',
      phone: '571-479-3142 x351'
    };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Dashboard':
        return (
          <div>
            <Stats />
            <Chart data={data} />
          </div>
        );
      case 'OrderManagement':
        return <OrderManagement />;
      case 'TransportationPlanning':
        return <TransportationPlanning />;
      case 'WarehouseManagement':
        return <WarehouseManagement />;
      case 'ShipmentTracking':
        return <ShipmentTracking />;
      case 'SupplierManagement':
        return <SupplierManagement />;
      case 'ReportingAnalytics':
        return <ReportingAnalytics />;
      case 'ComplianceDocumentation':
        return <ComplianceDocumentation />;
      default:
        return (
          <div>
            <Stats />
            <Chart data={data} />
          </div>
        );
    }
  };

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
    setTooltipPosition({ left: '605.2px', top: '58.8px' });
  };

  return (
    <div className="dashboard-container">
      <TopBar toggleSidebar={toggleSidebar} openModal={openModal} user={user} toggleTooltip={toggleTooltip} />
      <div className={`dashboard ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar setActiveSection={setActiveSection} />
        <div className="main-content">
          {renderSection()}
          <div className={`tooltip ${tooltipVisible ? 'visible' : ''}`} style={tooltipPosition}>
            {/* Tooltip content here */}
          </div>
        </div>
      </div>
      <AccountSettingsModal isVisible={isModalVisible} onClose={closeModal} onSave={handleSave} user={user} />
    </div>
  );
};

const Sidebar = ({ setActiveSection }) => (
  <div className="sidebar">
    <ul>
      <li onClick={() => setActiveSection('Dashboard')}>
        <a href="#">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <span>Dashboard</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('OrderManagement')}>
        <a href="#">
          <FontAwesomeIcon icon={faClipboardList} />
          <span>Order Management</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('TransportationPlanning')}>
        <a href="#">
          <FontAwesomeIcon icon={faTruck} />
          <span>Transportation Planning</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('WarehouseManagement')}>
        <a href="#">
          <FontAwesomeIcon icon={faWarehouse} />
          <span>Warehouse Management</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('ShipmentTracking')}>
        <a href="#">
          <FontAwesomeIcon icon={faShippingFast} />
          <span>Shipment Tracking</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('SupplierManagement')}>
        <a href="#">
          <FontAwesomeIcon icon={faUsers} />
          <span>Supplier Management</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('ReportingAnalytics')}>
        <a href="#">
          <FontAwesomeIcon icon={faChartLine} />
          <span>Reporting & Analytics</span>
        </a>
      </li>
      <li onClick={() => setActiveSection('ComplianceDocumentation')}>
        <a href="#">
          <FontAwesomeIcon icon={faFileContract} />
          <span>Compliance & Documentation</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Log out</span>
        </a>
      </li>
    </ul>
  </div>
);

const TopBar = ({ toggleSidebar, openModal, user }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSettingsClick = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <div className="top-bar">
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1>Dashboard</h1>
      <div className="user-info" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} size="2x" style={{ color: 'black' }} />
        {dropdownVisible && (
          <div className="dropdown-menu">
            <p>{user.name}</p>
            <a href="/admin/settings" onClick={handleSettingsClick}>
              <FontAwesomeIcon icon={faCog} />
              <span>Account settings</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
