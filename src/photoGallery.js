// PhotoGallery.js
import React, { useState } from 'react';
import photoGalleryData from './photoGalleryData'; // импортируем массив с данными о фотографиях
import './PhotoGallery.css'; // импортируем стили

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClickPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePopup = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      <div className="photo-sidebar">
        {/* Здесь разместите кнопки бокового меню */}
        <button>Награды и сертификаты</button>
        <button>Фотогалерия</button>
        <button className="active">Видеоролики</button>
        <button>Новости</button>
      </div>
      <div className="photos-gallery">
        {/* Отображение фотогалереи */}
        {photoGalleryData.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={`Photo ${photo.id}`}
            onClick={() => handleClickPhoto(photo)}
            className="gallery-photo"
          />
        ))}
      </div>
      {selectedPhoto && (
        <div className="popup-background" onClick={handleClosePopup}>
          <div className="popup-content">
            <button className="popup-close-btn" onClick={handleClosePopup}>X</button>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="popup-photo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
