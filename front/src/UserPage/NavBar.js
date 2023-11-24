import React, { useState } from 'react';
import Login from './Login'; // Import your Login component

const BeautyShopNavbar = ({ onPageChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleNavLinkClick = (pageName) => {
    // Call the callback function with the clicked pageName
    onPageChange(pageName);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    // Handle your form submission logic here

    // Close the modal after form submission
    handleCloseModal();
  };
  
  return (
    <div className="bg-AlbescentWhite mb-5">
      <nav className="flex flex-row items-center justify-center sticky top-0">
        <div className="flex flex-grow text-center space-x-20">
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white hover:bg-TobaccoBrown bg-Romantic h-14 border-2 border-TobaccoBrown"
            onClick={() => handleNavLinkClick('Home')}>
            Home
          </button>
          <button 
            className="rounded-lg w-full text-TobaccoBrown hover:text-white hover:bg-TobaccoBrown bg-Romantic border-2 border-TobaccoBrown"
            onClick={() => handleNavLinkClick('About')}>
            About
          </button>
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white hover:bg-TobaccoBrown bg-Romantic border-2 border-TobaccoBrown"
            onClick={() => handleNavLinkClick('Contact')}>
            Contact
          </button>
          <button 
            data-modal-target="authentication-modal"
             data-modal-toggle="authentication-modal"
            onClick={toggleModal}
            className="block rounded-lg w-full text-TobaccoBrown hover:text-white hover:bg-TobaccoBrown bg-Romantic border-2 border-TobaccoBrown">
            Login
          </button>
          <button className="rounded-lg w-full text-TobaccoBrown hover:text-white hover:bg-TobaccoBrown bg-Romantic border-2 border-TobaccoBrown"
            onClick={() => handleNavLinkClick('Cart')}>
            Cart
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
          <div className="flex justify-items-center items-center m-auto">
            <span
              className="absolute top-4 right-4 text-2xl cursor-pointer"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <Login onClose={handleCloseModal} onSubmit={handleSubmit}/>
          </div>
        </div>
      )}

      <div className='grid'>
        <div className="justify-self-center w-1/3 text-center text-TobaccoBrown text-5xl h-20  mt-5 rounded-lg bg-Romantic border-2 border-TobaccoBrown ">
          <h1 className="py-[3%]">Aphrodite</h1>
        </div>
      </div>
    </div>
  );
};

export default BeautyShopNavbar;
