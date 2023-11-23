import React, { useState } from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';
import About from './About'; 
import Contact from './Contact'; 
import ProductSection from './ProductSection';

const UserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePage, setActivePage] = useState("productList"); // Default active page

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  
  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  }

  const renderContent = () => {
    switch (activePage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return (
          <ProductSection
            onSelectCategory={handleCategorySelect}
            onSearch={handleSearch}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />
        );
    }
  }
  
  return (
    // Nav Bar
    <div className='h-screen'>
      <div className="h-full bg-AlbescentWhite p-6">
        {/* Nav Bar */}
        <div><NavBar onPageChange={handlePageChange} /></div>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserPage;