import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import CandyForm from './components/CandyForm';
import Cart from './components/Cart';
import CandyList from './components/CandyList';
import Header from './components/Header';

function App() {
  return (
    <CartProvider>
      
      <div className="App">
        <Header />
        <CandyForm />
        <CandyList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
