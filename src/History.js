import './History.css';


import React from 'react';

const History = () => {
    return (
        <div className="history">
          <div className="side-menu">
            <button className="menu-button">О компании</button>
            <button className="menu-button">История</button>
            <button className="menu-button">Ферма</button>
          </div>
          <div className="video-container">
          {/* Здесь вставляем код для встраивания видео из YouTube */}
            <iframe 
             width="500" 
             height="300" 
             src="https://www.youtube.com/embed/xSROXf5u7gY?si=TsaMkgQ493fuWwz5" 
             title="YouTube video player" 
              frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen
             ></iframe>
           </div>
            <div className="social-icons">
              <img src="./slph/facebook.png" alt="Facebook" />
              <img src="./slph/instagram.png" alt="Instagram" />
              <img src="./slph/youtube.png" alt="YouTube" />
            </div>
          </div>

      );
    };

  
  export default History;
