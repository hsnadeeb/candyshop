import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state, dispatch, showCart, setShowCart } = useCart();

  const cartTotal = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleRemoveFromCart = (candy) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: candy });
  };

  // Toggle the visibility of the cart
  const toggleCartVisibility = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  if (!showCart) {
    return (
      <div>
        <button onClick={toggleCartVisibility}>Open Cart</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        {state.cart.map((candy) => (
          <div key={candy.name}>
            <p>{candy.name}</p>
            <p>{candy.description}</p>
            <p>${candy.price} x {candy.quantity}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 1 } })}>+</button>
            <button onClick={() => dispatch({ type: 'SUBTRACT_FROM_CART', payload: { ...candy, quantity: 1 } })}>-</button>
            <button onClick={() => handleRemoveFromCart(candy)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total: ${cartTotal}</p>
      <button onClick={toggleCartVisibility}>Close</button>
      <button>Order Now</button>
    </div>
  );
}

export default Cart;