import React, { useState } from 'react';
import './logoGallery.css'
import { logosData } from './logoData'; // Импорт данных о логотипах из другого файла




    const groupedLogos = [
      logosData.slice(0, 2), // Первая колонка, первые два логотипа
      logosData.slice(2, 5), // Вторая колонка, следующие три логотипа
      logosData.slice(5) // Третья колонка, остальные логотипы
    ]; 

    const LogoGallery = () => {
      const [selectedLogo, setSelectedLogo] = useState(null);
    
      // Функция для обработки нажатия на логотип
      const handleLogoClick = (logo) => {
        setSelectedLogo(logo);
      };
    
      // Функция для закрытия попапа
      const handleClosePopup = () => {
        setSelectedLogo(null);
      };
    
      // Разделение логотипов на группы для колонок
      const groupedLogos = [
        logosData.slice(0, 2), // Первая колонка, первые два логотипа
        logosData.slice(2, 5), // Вторая колонка, следующие три логотипа
        logosData.slice(5) // Третья колонка, остальные логотипы
      ]; 
    
      return (
        <div className="container-logo">
          <div className="menuColumn-logo">
            <button className="menuButton-logo">Бренды</button>
            <button className="menuButton-logo">Каталог</button>
          </div>
          <div className="galleryColumn-logo">
            <div className="gallery-logo">
              {groupedLogos.map((column, index) => (
                <div key={index} className="column-logo">
                  {column.map((logo) => (
                    <img
                      key={logo.id}
                      src={logo.image}
                      alt={logo.name}
                      className="logo"
                      onClick={() => handleLogoClick(logo)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          {selectedLogo && (
            <div>
              <div className="overlay" onClick={handleClosePopup}></div>
              <div className="popup">
                <div className="popupContent">
                  <div className="logoColumn">
                    <img
                      src={selectedLogo.image}
                      alt={selectedLogo.name}
                      className="selectedLogo"
                    />
                  </div>
                  <div className="infoColumn">
                    <h2>{selectedLogo.name}</h2>
                    <p>{selectedLogo.description}</p>
                  </div>
                  <div className="closeButton" onClick={handleClosePopup}>
                    X
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="socialMediaColumn-logo">
            <img src="./slph/facebook.png" alt="Facebook" className="socialLogo" />
            <img src="./slph/instagram.png" alt="Instagram" className="socialLogo" />
            <img src="./slph/youtube.png" alt="YouTube" className="socialLogo" />
          </div>
        </div>
      );
    };
    
    export default LogoGallery;
    





          
