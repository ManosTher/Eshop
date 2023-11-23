// Cart.jsx

import React from 'react';

const Cart = ({ cartItems }) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <span className="font-bold">Total:</span>
        <span>${getTotal()}</span>
      </div>
    </div>
  );
};

export default Cart;
