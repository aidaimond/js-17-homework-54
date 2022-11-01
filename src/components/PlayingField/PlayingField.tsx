import React from "react";
import {Item} from "../../types";
import Cell from "./Cell";
import "./playingField.css"

interface Props {
  items: Item[];
  changeItem: (index: number) => void ;
}

const fieldStyle: React.CSSProperties = {
  width: '420px',
  height: '440px',
  display: 'flex',
  flexWrap: 'wrap',
  margin: '20px',
  border: '1px solid black'
}

const PlayingField: React.FC<Props> = ({items, changeItem}) => {
  return (
    <div style={fieldStyle}>
      {items.map((item, index) => (
        <Cell
          key={index}
        item={item}
        onClick={() => changeItem(index)}/>
      ))}
    </div>
  )
}

export default PlayingField;