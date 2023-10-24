// CandyForm.js
import React, { useState } from 'react';
import { useCart } from './CartContext';

function CandyForm() {
  const [candy, setCandy] = useState({ name: '', description: '', price: 0 });
  const { dispatch } = useCart();

  const handleAddCandy = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...candy, quantity: 1, id: Date.now() },
    });
    setCandy({ name: '', description: '', price: 0 });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Candy Name"
        value={candy.name}
        onChange={(e) => setCandy({ ...candy, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={candy.description}
        onChange={(e) => setCandy({ ...candy, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={candy.price}
        onChange={(e) => setCandy({ ...candy, price: e.target.value })}
      />
      <button onClick={handleAddCandy}>Add Candy</button>
    </div>
  );
}

export default CandyForm;
