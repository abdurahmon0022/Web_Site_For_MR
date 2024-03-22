import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const images = ["./slph/01.jpg", "./slph/02.jpg", "./slph/03.jpg"]; // Пути к изображениям
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 10000); // Переключение каждые 10 секунд

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <div className="slider-button-container">
      <button onClick={prevSlide} className="slider-button">&#9664;</button> {/* Символ стрелки влево */}
      <button onClick={nextSlide} className="slider-button">&#9654;</button> {/* Символ стрелки вправо */}
     </div>
    </div>
  ); 
};

export default Slider;
