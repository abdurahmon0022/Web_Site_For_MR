// CompanyAwards.js
import React, { useState } from 'react';
import awardsData from './awardsData'; // импортируем массив с данными о наградах
import './CompanyAwards.css'; // импортируем стили

const CompanyAwards = () => {
  const [selectedMenu, setSelectedMenu] = useState('awards'); // состояние для выбранного меню

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleImageClick = (src) => {
    window.open(src); // открываем фото в новом окне
  };

  return (
    <div className="company-gallery">
      <div className="sidebar">
        <button className={selectedMenu === 'awards' ? 'active' : ''} onClick={() => handleMenuClick('awards')}>Награды и сертификаты</button>
        {/* Добавьте кнопки для остальных категорий */}
      </div>
      <div className="gallery">
        {selectedMenu === 'awards' && (
          <div className="company-photos-grid">
            {/* Отображение фото наград и сертификатов */}
            {awardsData.map((photo) => (
              <img key={photo.id} src={photo.src} alt={`Awards ${photo.id}`} onClick={() => handleImageClick(photo.src)} />
            ))}
          </div>
        )}
        {/* Добавьте условия для остальных категорий */}
      </div>
    </div>
  );
};

export default CompanyAwards;