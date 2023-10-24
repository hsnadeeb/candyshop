import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import CandyForm from './components/CandyForm';
import Cart from './components/Cart';
import CandyList from './components/CandyList';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <CandyForm />
        <CandyList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
