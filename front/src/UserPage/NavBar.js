import React from 'react';

const BeautyShopNavbar = () => {
  return (
    <div className="bg-AlbescentWhite p-6">
      <nav className="flex flex-row items-center justify-center sticky top-0">
        <div className="flex flex-grow text-center space-x-20">
          <button className="rounded-lg w-full text-teal-200 hover:text-white bg-slate-500 h-14">
            Home
          </button>
          <button className="rounded-lg w-full text-teal-200 hover:text-white bg-slate-500">
            About
          </button>
          <button className="rounded-lg w-full text-teal-200 hover:text-white bg-slate-500">
            Login
          </button>
          <button className="rounded-lg w-full text-teal-200 hover:text-white bg-slate-500">
            Cart
          </button>
        </div>
      </nav>
      <div className="text-center text-white mb-4 mt-8">
        <h1 className="text-2xl font-bold tracking-tight">Aphrodite</h1>
      </div>
    </div>
  );
};

export default BeautyShopNavbar;
