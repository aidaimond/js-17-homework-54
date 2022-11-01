import React, {useState} from 'react'
import './App.css';
import PlayingField from "../../components/PlayingField/PlayingField";
import {Item} from "../../types";
import ResetButton from "../../components/ResetButton/ResetButton";
import TriesAmount from "../../components/TriesAmount/TriesAmount";

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
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  }

  const changeItem = (index: number) => {
    const itemsCopy = [...items];
    const itemCopy = {...itemsCopy[index]};
    itemCopy.clicked = true;
    itemsCopy[index] = itemCopy;
    setItems(itemsCopy);
    counter();
  }

  const resetBtn = () => {
    setItems(createItems);
    setCount(0);
  }

  return (

    <div className="App">
      <PlayingField items={items} changeItem={changeItem}/>
      <ResetButton reset={resetBtn}/>
      <TriesAmount triesAmount={count}/>
    </div>
  );
}

export default App;