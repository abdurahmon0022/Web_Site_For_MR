// AwardPhoto.js
import React from 'react';
import './AwardPhoto.css'; // Импорт стилей

const AwardPhoto = ({ src }) => {
  return (
    <div className="award-photo">
      <img src={src} alt="Награда или сертификат" />
    </div>
  );
};

export default AwardPhoto;
