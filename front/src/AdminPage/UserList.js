import React from 'react';

const UserList = ({ userData }) => {
  return (
    <div className="bg-gray-800 text-white px-4 py-12 sm:px-6 lg:px-8 rounded">
    <ul className="divide-y divide-gray-100 role=list ">
      {userData.map(({ points, password, ...user }) => (
        <li key={user.id} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm font-semibold leading-6">
              {user.firstName} {user.lastName}
            </p>
            <p className="mt-1 truncate text-xs leading-5 ">
              {user.email}
            </p>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 ">
              {user.city}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              {user.address}, {user.phone}
            </p>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default UserList;
