// ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
