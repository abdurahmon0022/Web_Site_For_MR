import React, { useState } from 'react';
import './NewsGallery.css'; // Импортируем стили
import newsData from './newsData'; // Импортируем данные о новостях

const NewsGallery = () => {
  const [expandedNewsId, setExpandedNewsId] = useState(null);

  const handleNewsClick = (id) => {
    if (expandedNewsId === id) {
      setExpandedNewsId(null); // Закрываем новость, если она уже открыта
    } else {
      setExpandedNewsId(id); // Открываем новость
    }
  };

  return (
    <div className="news-gallery">
      <div className="sidebar">
        <button>Награды и сертификаты</button>
        <button>Фотогалерея</button>
        <button>Видеоролики</button>
        <button>Новости</button>
      </div>
      <div className="news-tiles">
        {newsData.map((item) => (
          <div
            key={item.id}
            className={`news-tile ${expandedNewsId === item.id ? 'expanded' : ''}`}
            onClick={() => handleNewsClick(item.id)}
          >
            <div className="news-photo">
              <img src={item.photoUrl} alt={item.title} />
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
              {expandedNewsId === item.id && (
                <div className="news-details">
                  <p>{item.text}</p>
                  {/* Другие детали новости */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsGallery;
