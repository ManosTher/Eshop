import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    const updatedItems = [...cartItems, item];
    setCartItems(updatedItems);
    setTotalPrice(totalPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (item) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <div>
      {/* Render your cart items here */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
