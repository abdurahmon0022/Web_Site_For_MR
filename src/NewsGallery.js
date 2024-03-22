import React, { useState } from 'react';
import './NewsGallery.css'; // Импортируем стили
import newsData from './newsData'; // Импортируем данные о новостях

const NewsGallery = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleClosePopup = () => {
    setSelectedNews(null);
  };

  const handlePopupClick = (e) => {
    // Проверяем, что клик произошел вне попапа
    if (e.target.classList.contains('news-popup')) {
      handleClosePopup();
    }
  };
  const reversedNewsData = [...newsData].reverse();

  return (
    <div className="news-gallery">
      <div className="sidebar">
        {/* кнопки бокового меню */}
        <button>Награды и сертификаты</button>
        <button>Фотогалерея</button>
        <button>Видеоролики</button>
        <button>Новости</button>
      </div>
      <div className="news-tiles">
        {/* Плитки новостей */}
        {reversedNewsData.map((item) => (
          <div
            key={item.id}
            className="news-tile"
            onClick={() => handleNewsClick(item)}
          >
            <div className="news-photo">
              <img src={item.photoUrl} alt={item.title} />
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedNews && (
        <div className="news-popup" onClick={handlePopupClick}>
          <div className="popup-content-news">
            <button className="close-btn" onClick={handleClosePopup}>
              Х 
            </button>
            <div className="popup-photo-news">
              <img src={selectedNews.photoUrl} alt={selectedNews.title} />
            </div>
            <div className="popup-details-news">
              <h2>{selectedNews.title}</h2>
              <p>{selectedNews.text}</p>
              {/* Другие детали новости */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsGallery;
