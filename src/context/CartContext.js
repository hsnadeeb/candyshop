// CartContext.js
import React, { createContext, useReducer, useContext, useState } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  showCart: false,
  candyList: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item is already in the cart, just update the quantity
        const updatedCart = state.cart.map((item) => {
          if (item.id === existingItem.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });

        return { ...state, cart: updatedCart };
      } else {
        // If the item is not in the cart, add it
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "SUBTRACT_FROM_CART":
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = item.quantity - action.payload.quantity;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
        }
        return item;
      });

      return { ...state, cart: updatedCart };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filteredCart };

    case "ADD_TO_CANDY_LIST":
      return { ...state, candyList: [...state.candyList, action.payload] };

    default:
      return state;
  }
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ state, dispatch, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
