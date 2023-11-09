import React from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';

const UserPage = () => {
  return (
    // Nav Bar
    <div className='h-screen'>
      <div className="h-full bg-AlbescentWhite p-6">
        <div><NavBar /></div>

        <div className='flex'>
          {/* SIDEBAR*/}
          <div className='h-1/3'><SideBar /></div>

          {/* PRODUCT LIST */}
          <div className='flex-1 mx-5 border-solid border-2 rounded-lg border-Romantic' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <ProductList /></div>
        </div>

      </div>
    </div> 
    

  );
};

export default UserPage;