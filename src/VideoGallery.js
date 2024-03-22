// VideoGallery.js
import React from 'react';
import videoGalleryData from './videoGalleryData'; // импортируем массив с данными о видеороликах
import './VideoGallery.css'; // импортируем стили

const VideoGallery = () => {
  // Сортируем видеоролики в обратном порядке по ID
  const sortedVideos = videoGalleryData.slice().reverse();

  return (
    <div className="video-gallery">
      <div className="video-sidebar">
        {/* Здесь разместите кнопки бокового меню */}
        <button>Награды и сертификаты</button>
        <button>Фотогалерия</button>
        <button className="active">Видеоролики</button>
        <button>Новости</button>
      </div>
      <div className="videos-grid">
        {/* Отображение видеороликов */}
        {sortedVideos.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
