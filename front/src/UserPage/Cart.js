import React, { useState , useEffect} from 'react';
import CartItem from './CartItem';

const Cart = ({ products, onClose, onCheckout, onDelete }) => {
  // Placeholder for user information
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    // Add other user information as needed
  });

  // State for cart total and other cart-related logic
  const [cartTotal, setCartTotal] = useState(0);

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    const total = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    setCartTotal(total);
  };

  // Other logic for adjusting quantities, deleting items, etc.

  // useEffect to recalculate total when products change
  useEffect(() => {
    calculateTotal();
  }, [products]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onDelete={() => onDelete(product.id)}
              // Add other props as needed
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
