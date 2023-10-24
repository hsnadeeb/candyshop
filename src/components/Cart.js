// Cart.js
import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { state, dispatch } = useCart();

  const cartTotal = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleRemoveFromCart = (candy) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: candy });
  };

  return (
    <div>
      {state.cart.length > 0 && <button>Order Now</button>}
      <div>
        {state.cart.map((candy) => (
          <div key={candy.id}>
            <p>{candy.name}</p>
            <p>{candy.description}</p>
            <p>${candy.price} x {candy.quantity}</p>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 1 } })}>Add 1</button>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 2 } })}>Add 2</button>
            <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 3 } })}>Add 3</button>
            <button onClick={() => handleRemoveFromCart(candy)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total: ${cartTotal}</p>
    </div>
  );
}

export default Cart;
