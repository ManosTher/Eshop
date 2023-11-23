import React from 'react';

const CartItem = ({ product, onDelete, onQuantityChange }) => {
  const handleQuantityChange = (newQuantity) => {
    // Call the onQuantityChange function with the new quantity
    onQuantityChange(product.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between border-b-2 border-gray-300 p-4">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-gray-500">${product.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Quantity Changer */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(product.quantity - 1)}
            className="px-2 py-1 border rounded text-gray-500"
          >
            -
          </button>
          <span className="text-lg">{product.quantity}</span>
          <button
            onClick={() => handleQuantityChange(product.quantity + 1)}
            className="px-2 py-1 border rounded text-gray-500"
          >
            +
          </button>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
