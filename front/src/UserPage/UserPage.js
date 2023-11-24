import React, { useState } from 'react';

import NavBar from './NavBar';
import About from './About'; 
import Contact from './Contact'; 
import ProductSection from './ProductSection';
import Cart from './Cart';

const UserPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePage, setActivePage] = useState("productList"); // Default active page
  const [cart, setCart] = useState([]); // State to manage cart items

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
  }
  
  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  }

  const handleAddToCart = (product) => {
    // Implement logic to add product to the cart
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log('Product added to cart:', product);
  };
  
  const handleDeleteProduct = (productId) => {
    // Implement logic to delete product from the cart
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };
  
   const handleQuantityChange = (productId, newQuantity) => {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        )
      );
    };
  
  const handleCheckout = () => {
    // Implement logic to handle checkout, possibly redirect to order page with cart information
    console.log('Checkout:', cart);

  // Clear the cart after checkout if needed
  setCart([]);
  };
  



  
  const renderContent = () => {
    switch (activePage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case 'Cart':
        return (
          <Cart
            products={cart}
            onClose={() => setActivePage('productList')}
            onCheckout={() => handleCheckout()}
            onDelete={(productId) => handleDeleteProduct(productId)}
          />
        );
      default:
        return (
          <ProductSection
            onSelectCategory={handleCategorySelect}
            onSearch={handleSearch}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onAddToCart={(product) => handleAddToCart(product)}          />
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