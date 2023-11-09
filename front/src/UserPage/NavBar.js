import React from 'react';

const BeautyShopNavbar = () => {
  return (
    <div className="bg-AlbescentWhite mb-5">
      <nav className="flex flex-row items-center justify-center sticky top-0">
        <div className="flex flex-grow text-center space-x-20">
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white bg-Romantic h-14 border-2 border-TobaccoBrown">
            Home
          </button>
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white bg-Romantic border-2 border-TobaccoBrown">
            About
          </button>
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white bg-Romantic border-2 border-TobaccoBrown">
            Login
          </button>
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white bg-Romantic border-2 border-TobaccoBrown">
            Cart
          </button>
        </div>
      </nav>
      <div className='grid'>
        <div className="justify-self-center w-1/3 text-center text-TobaccoBrown text-5xl h-20  mt-5 rounded-lg bg-Romantic border-2 border-TobaccoBrown ">
          <h1 className="py-[3%]">Aphrodite</h1>
        </div>
      </div>
    </div>
  );
};

export default BeautyShopNavbar;
