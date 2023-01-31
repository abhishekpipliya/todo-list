import React, { useState } from 'react';
import './App.css';

function App() {

  //state hook - useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // Helper Function
  function addItem() {

    if (!newItem) {
      alert("Enter an Item");
      return;
    }

    console.log(newItem);
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item]);
    setNewItem("");

  }
  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>ToDo List</h1>

      {/* 2. Input  */}
      <input type="text"
        placeholder='Add an Item'
        value={newItem}
        onChange={e => setNewItem(e.target.value)} />
      <button onClick={() => addItem()}>ADD</button>

      {/* 3. List of Items  */}

      <ul>
        {items.map(item => {
          return
          <li key={item.id}>{item.value} </li>
        })}

      </ul>

    </div>
  );
}

export default App;
