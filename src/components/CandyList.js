// CandyList.js
import React from 'react';
import { useCart } from './CartContext';

function CandyList() {
  const { state, dispatch } = useCart();

  return (
    <div>
      {state.cart.map((candy) => (
        <div key={candy.id}>
          <p>{candy.name}</p>
          <p>{candy.description}</p>
          <p>${candy.price}</p>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 1 } })}>Add 1</button>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 2 } })}>Add 2</button>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...candy, quantity: 3 } })}>Add 3</button>
        </div>
      ))}
    </div>
  );
}

export default CandyList;
