import React from "react";
import {Item} from "../../types";
import Cell from "./Cell";

interface Props {
  items: Item[];
  changeItem: React.MouseEventHandler;
}

const PlayingField: React.FC<Props> = ({items, changeItem}) => {
  return (
    <div>
      {items.map((item) => (
        <Cell
        item={item.hasItem}
        onClick={changeItem}/>
      ))}
    </div>
  )
}

export default PlayingField;