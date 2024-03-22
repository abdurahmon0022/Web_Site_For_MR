// CareerComponent.js

import React from 'react';
import './CareerComponent.css';

const CareerComponent = () => {
  return (
    <div className="career">
      <img src="path/to/your/photo.jpg" alt="Career" className="career-photo" />
      <div className="career-logos">
        <div className="career-logo">
          <img src="./slph/iq.png" alt="Logo 1" className="logo-image" />
          <p>Мы думаем стратегически, а не «трушим пожары».</p>
        </div>
        <div className="career-logo">
          <img src="./slph/innovators.png" alt="Logo 2" className="logo-image" />
          <p>Если у нас есть идеи для улучшения, которые сработают на благо Компании, мы готовы внедрять их без промедления.</p>
        </div>
        {/* Add more logos with descriptions as needed */}
      </div>
    </div>
  );
};

export default CareerComponent;

