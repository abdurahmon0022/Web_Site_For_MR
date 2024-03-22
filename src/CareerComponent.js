// CareerComponent.js

import React from 'react';
import './CareerComponent.css';
import logosData from './careerData';

const CareerComponent = () => {
  return (
    <div className="career">
      <img src="./slph/vnimanie.jpg" alt="Career" className="career-photo" />
      <div className="career-logos-container">
        {logosData.map((logo, index) => (
          <div key={index} className="career-logo-description">
            <img src={logo.image} alt={logo.alt} className="logo-image" />
            <p>{logo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerComponent;



