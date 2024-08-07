import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, description, image, onInfoClick, onBookNowClick }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='button-group'>
      <button onClick={onInfoClick}>More Info</button>
        <button onClick={onBookNowClick}>Book Now</button>
        </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onInfoClick: PropTypes.func.isRequired,
  onBookNowClick: PropTypes.func.isRequired,
};

export default ServiceCard;
