
import React from 'react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';


function Header() {
    const { state, setShowCart } = useCart();
  
    const handleCartButtonClick = () => {
      // Toggle the showCart state
      setShowCart((prevShowCart) => !prevShowCart);
    };
  
    return (
      <header>
        <h1>Candy Shop</h1>
        <button onClick={handleCartButtonClick}>Cart ({state.cart.length})</button>
      </header>
    );
  }
  
  export default Header;