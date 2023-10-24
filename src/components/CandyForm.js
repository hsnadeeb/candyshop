import React, { useState } from "react";
import { useCart } from "../context/CartContext";


function CandyForm() {
    const [candy, setCandy] = useState({ name: '', description: '', price: 0 });
    const { dispatch } = useCart();
  
    const handleAddToCandyList = () => {
      // Dispatch an action to add the candy to the candy list
      dispatch({ type: 'ADD_TO_CANDY_LIST', payload: candy });
      console.log(candy);
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
        <button onClick={handleAddToCandyList}>Add Candy to List</button>
      </div>
    );
  }
  
  export default CandyForm;
