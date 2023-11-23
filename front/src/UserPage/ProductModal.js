// ProductModal.jsx

import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="flex justify-items-center items-center m-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {product.name}
            </h1>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              ></img>
            </div>
            <p className="mt-4 text-sm text-gray-700">{product.description}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
