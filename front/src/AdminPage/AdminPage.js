// AdminPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import AdminNavbar from './AdminNav';
import GuestList from './GuestList';
import UserList from './UserList';
import Products from './Products';

const AdminPage = () => {
  const { selectedOption } = useParams();
  
  const renderComponent = () => {
    switch (selectedOption) {
      case 'guests':
        return <GuestList />;
      case 'users':
        return <UserList />;
      case 'orders':
        return null;
      case 'products':
        return <Products />;
      default:
        return <UserList />;
    }
  };


  return (
    <div className="container mx-auto h-screen">
      <div>
        <AdminNavbar />
      </div>
      {renderComponent()}
    </div>
  );
};

export default AdminPage;
