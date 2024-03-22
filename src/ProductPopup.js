// ProductPopup.js
import React from 'react';
import './ProductPopup.css'



const ProductPopup = ({ product, onClose }) => {
  return (
    <div className="product-popup-overlay" onClick={onClose}>
      <div className="product-popup" onClick={(e) => e.stopPropagation()}>
        <div className="close-btn" onClick={onClose}>X</div>
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Nutrition per 100g:</p>
            <ul>
              <li>Calories: {product.nutrition.calories}</li>
              <li>Protein: {product.nutrition.protein}g</li>
              <li>Carbs: {product.nutrition.carbs}g</li>
              <li>Fat: {product.nutrition.fat}g</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
