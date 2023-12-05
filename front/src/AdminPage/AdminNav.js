import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="text-white text-center py-4 sticky top-0">
            <div className="">
                <ul className="flex flex-row space-x-4 ">
                    <Link to="/admin/users" className="flex-grow rounded bg-gray-800 w-full text-white hover:text-blue-300 h-14">
                        <li className="flex items-center justify-center h-full">
                            Users
                        </li>
                    </Link>
                    <Link to="/admin/guests" className="flex-grow rounded bg-gray-800 w-full text-white hover:text-blue-300 h-14">
                        <li className="flex items-center justify-center h-full">
                            Guests
                        </li>
                    </Link>
                    <Link to="/admin/orders" className="flex-grow rounded bg-gray-800 w-full text-white hover:text-blue-300 h-14">
                        <li className="flex items-center justify-center h-full">
                            Orders
                        </li>
                    </Link>
                    <Link to="/admin/products" className="flex-grow rounded bg-gray-800 w-full text-white hover:text-blue-300 h-14">
                        <li className="flex items-center justify-center h-full">
                            Products
                        </li>
                    </Link>
                    <Link to="/admin/settings" className="flex-grow rounded bg-gray-800 w-full text-white hover:text-blue-300 h-14">
                        <li className="flex items-center justify-center h-full">
                            Settings
                        </li>
                    </Link>
                    
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;

