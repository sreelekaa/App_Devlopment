import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../assets/css/Home.css';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bgimage.jpeg';
const images = [image1, image2, image3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="main-content">
        <section className="intro-section">
          <div className="background" style={{ backgroundImage: `url(${images[currentImage]})` }}></div>
          <h1>Welcome to Logistics Management</h1>
          <p>Experience the best in Logistics Management.</p>
        </section>
        <section className="features-section">
          <h2>Our Features</h2>
          <div className="card-container">
            <div className="card">
              <h3>Real-Time Tracking</h3>
              <p>Monitor your shipments in real-time with our advanced tracking system.</p>
            </div>
            <div className="card">
              <h3>Inventory Management</h3>
              <p>Keep track of your inventory levels and manage stock efficiently.</p>
            </div>
            <div className="card">
              <h3>Comprehensive Reporting</h3>
              <p>Generate detailed reports to analyze and optimize your logistics operations.</p>
            </div>
            <div className="card">
              <h3>Customer Support</h3>
              <p>Get 24/7 support from our dedicated customer service team.</p>
            </div>
            <div className="card">
              <h3>Automated Notifications</h3>
              <p>Receive automated notifications for important updates and alerts.</p>
            </div>
            <div className="card">
              <h3>Route Optimization</h3>
              <p>Optimize delivery routes to save time and reduce costs.</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="card-container">
            <div className="card">
              <p>"The real-time tracking feature has significantly improved our logistics efficiency. Highly recommend!"</p>
              <h4>- John Doe, Logistics Manager</h4>
            </div>
            <div className="card">
              <p>"The user-friendly interface and excellent customer support make this system a joy to use."</p>
              <h4>- Jane Smith, Operations Director</h4>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Sign up today and streamline your logistics operations with our advanced tools.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </div>
      <footer className="footer">
        <p>© 2024 Logistics Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
