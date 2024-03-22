import './ProductCatalog.css'
// ProductCatalog.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductPopup from './ProductPopup';
import productsData from './ProductsData';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = selectedCategory === 'all' ? productsData : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="product-catalog">
      <div className="sidebar">
        <h2>Categories</h2>
        <ul>
          <li onClick={() => handleCategorySelect('all')}>All Products</li>
          <li onClick={() => handleCategorySelect('Йогурт')}>Йогурт</li>
          <li onClick={() => handleCategorySelect('Сметана')}>Сметана</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} onClick={() => handleProductSelect(product)} />
        ))}
      </div>
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
    </div>
  );
};

export default ProductCatalog;

