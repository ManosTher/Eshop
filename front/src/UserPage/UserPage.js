import React from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import ProductList from './ProductList';

const UserPage = () => {
  return (
    // Nav Bar
    <div className='h-screen'> 
      <div className="bg-AlbescentWhite p-6">      
        <div><NavBar /></div>
        
      <div className='flex'>
      {/* SIDEBAR*/}
        <div className='flex-none'><SideBar /></div>
        
      {/* PRODUCT LIST */}
        <div className='flex-1 w-3/4 mx-5'><ProductList /></div>
      </div>  
        
      </div>
    </div> 
    

  );
};

export default UserPage;