import React from 'react';

const AdminNavbar = () => {
  return (
      <nav className="text-white py-4 sticky top-0">
          <div className="">
              <ul className="flex flex-row space-x-4 ">
                  <li className="flex-grow rounded bg-gray-800">
                      <button className="w-full text-white hover:text-blue-300 h-14">
                          Users
                      </button>
                  </li>
                  <li className="flex-grow rounded bg-gray-800">
                      <button className="w-full text-white hover:text-blue-300 h-14">
                          Guests
                      </button>
                  </li>
                  <li className="flex-grow rounded bg-gray-800">
                      <button className="w-full text-white hover:text-blue-300 h-14">
                          Orders
                      </button>
                  </li>
                  <li className="flex-grow rounded bg-gray-800">
                      <button className="w-full text-white hover:text-blue-300 h-14">
                          Products
                      </button>
                  </li>
              </ul>
          </div>
      </nav>
  );
};

export default AdminNavbar;
