import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Your layout content here */}
      <Outlet />
    </div>
  );
}

export default Layout;