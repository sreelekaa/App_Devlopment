import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LightTrail from './components/UI/LightTrail';
import AccountSettingsModal from './components/SettingsModal';
// import OrderManagement from './pages/admin/OrderManagement';

// Lazy load components
const UserLogin = lazy(() => import('./pages/user/Login'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Register = lazy(() => import('./pages/user/Register'));
const Home = lazy(() => import('./pages/user/Home'));
const Services = lazy(() => import('./pages/user/Services'));
const Shipments = lazy(() => import('./pages/user/Shipments'));
const Inventory = lazy(() => import('./pages/user/Inventory'));
const Tracking = lazy(() => import('./pages/user/Tracking'));
const Support = lazy(() => import('./pages/user/Support'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));

// Layouts
const UserLayout = ({ children }) => (
  <div>
    {/* Include User-specific navbar or sidebar here */}
    {children}
  </div>
);

const AdminLayout = ({ children }) => (
  <div>
    {/* Include Admin-specific navbar or sidebar here */}
    {children}
  </div>
);

function App() {
  return (
    <Router>
      {/* <LightTrail /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/register" element={<Register />} />

          {/* User Routes */}
          {/* <Route element={<UserLayout />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/support" element={<Support />} />
          {/* </Route> */}

          {/* Admin Routes */}
          {/* <Route element={<AdminLayout />}> */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/settings" element={<AccountSettingsModal />} />
          {/* <Route path="/admin/orders" element={<OrderManagement/>}/> */}
            {/* Add more admin routes here */}
          {/* </Route> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
