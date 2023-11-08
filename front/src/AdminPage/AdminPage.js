// AdminPage.js
import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNav';
import UserList from '../AdminPage/UserList';

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Fetch the list of users when the component mounts
      fetch('http://localhost:8080/users/') // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => setUsers(data)); // Assuming your API returns an array of user objects
    }, []);
  
  
    return (
        <div class="container mx-auto h-screen">
        <div>
          <AdminNavbar />
        </div>
        <div className="m-auto">
          {/* Use the UserList component to display the user data */}
          <UserList userData={users} />
        </div>
        {/* Third div below the second div */}
        <div>{/* Content for the third div */}</div>
      </div>
  );
};

export default AdminPage;
