// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the candy is already in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;

        return { ...state, cart: updatedCart };
      }

      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filteredCart };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
