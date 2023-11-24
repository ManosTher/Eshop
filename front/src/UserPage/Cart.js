import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ products, onClose, onCheckout, onDelete }) => {
  const [cart, setCart] = useState(products);

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    // Add other user information as needed
  });

  const [cartTotal, setCartTotal] = useState(0);

  const calculateTotal = () => {
    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setCartTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);
  

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onDelete={() => onDelete(product.id)}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(product.id, newQuantity)
              }
            />
          ))}
        </div>
        <div className="cart-summary">
          <p>Total: ${cartTotal}</p>
          {/* Add other summary information */}
        </div>
        <button onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
