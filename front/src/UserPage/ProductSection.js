// ProductSection.jsx

import React from 'react';
import SideBar from './SideBar';
import ProductList from './ProductList';
import UserPage from './UserPage';

const ProductSection = ({ onSelectCategory, onSearch, selectedCategory, searchTerm, onAddToCart }) => {
  return (
    <div className="flex">
      <SideBar onSelectCategory={onSelectCategory} onSearch={onSearch} />
      <div className="flex-1 mx-5 border-solid border-2 rounded-lg border-Romantic" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <ProductList selectedCategory={selectedCategory} searchTerm={searchTerm} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default ProductSection;
