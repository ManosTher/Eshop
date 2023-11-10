import React, { useState } from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';

const UserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  
  return (
    // Nav Bar
    <div className='h-screen'>
      <div className="h-full bg-AlbescentWhite p-6">
        <div><NavBar /></div>

        <div className='flex'>
          {/* SIDEBAR*/}
          <div className=''><SideBar onSelectCategory={handleCategorySelect} onSearch={handleSearch} /></div>

          {/* PRODUCT LIST */}
          <div className='flex-1 mx-5 border-solid border-2 rounded-lg border-Romantic' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <ProductList selectedCategory={selectedCategory} searchTerm={searchTerm} /></div>
        </div>

      </div>
    </div> 
    

  );
};

export default UserPage;