import React, {useState} from 'react'
import './App.css';
import {Item} from "../../types";
import PlayingField from "../../components/PlayingField/PlayingField";

function App() {
  const createItems = () => {
    const field: Item[] = [];

    for(let i = 0; i < 36; i++) {
      field.push({hasItem: false, clicked: false});
    }

    const randomEl = Math.floor(Math.random() * field.length);

    field[randomEl].hasItem = true;

    return field;
  };

  const [items, setItems] = useState(createItems());
  const [count, setCount] = useState();


  const changeItem = () => {}

  return (

    <div className="App">
      <PlayingField items={items} changeItem={changeItem}/>
    </div>
  );
}

export default App;
