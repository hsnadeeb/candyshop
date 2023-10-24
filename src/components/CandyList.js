import React from 'react';
import { useCart } from '../context/CartContext';

function CandyList() {
  const { state, dispatch, showCart } = useCart();

  const handleAddToCart = (candy, quantityToAdd) => {
    // Find the candy in the cart
    const existingItemIndex = state.cart.findIndex((item) => item.id === candy.id);
  
    if (existingItemIndex !== -1) {
      // Candy already exists in the cart, update the quantity
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += quantityToAdd;
      dispatch({
        type: 'UPDATE_CART_ITEM',
        payload: { candyId: candy.id, updatedQuantity: updatedCart[existingItemIndex].quantity },
      });
    } else {
      // Candy doesn't exist in the cart, add it
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...candy, quantity: quantityToAdd },
      });
    }
  };

//   const handleAddToCart = (candy, quantityToAdd) => {
//     // Find the candy in the cart
//     const existingItemIndex = state.cart.findIndex((item) => item.id === candy.id);

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...state.cart];
//       updatedCart[existingItemIndex].quantity += quantityToAdd;
//       dispatch({
//         type: 'UPDATE_CART_ITEM',
//         payload: { candyId: candy.id, updatedQuantity: updatedCart[existingItemIndex].quantity },
//       });
//     } else {
//       // Candy doesn't exist in the cart, add it
//       dispatch({
//         type: 'ADD_TO_CART',
//         payload: { ...candy, quantity: quantityToAdd },
//       });
//     }
//   };

  // Check if the cart is open, and only render the CandyList if it is
  if (showCart) {
    return null;
  }

  return (
    <div>
      {state.candyList.map((candy) => (
        <div key={candy.name}>
          <p>{candy.name}</p>
          <p>{candy.description}</p>
          <p>${candy.price}</p>
          <button onClick={() => handleAddToCart(candy, 1)}>Add 1</button>
          <button onClick={() => handleAddToCart(candy, 2)}>Add 2</button>
          <button onClick={() => handleAddToCart(candy, 3)}>Add 3</button>
        </div>
      ))}
    </div>
  );
}

export default CandyList;