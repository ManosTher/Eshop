// AdminPage.js
import React from 'react';
import AdminNavbar from './AdminNav';

const AdminPage = () => {
  return (
      <div class="container mx-auto h-screen">
          <div>
              <AdminNavbar />
          </div>
          <div className="m-auto">
              <h1>Admin Page</h1>
              <p>This is the admin page content.</p>
          </div>
          {/* Third div below the second div */}
          <div>
              {/* Content for the third div */}
          </div>
      </div>
  );
};

export default AdminPage;
