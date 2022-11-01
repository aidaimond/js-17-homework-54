import React from "react";
import {Item} from "../../types";

interface Props {
  item: Item;
  onClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = (props) => {

  const myStyle = ['item'];

  if (props.item.clicked) {
    myStyle.push('clicked');
  }

  return (
    <div className={myStyle.join(' ')} onClick={props.onClick}>
      <p>{props.item.hasItem? '*' : ''}</p>
    </div>
  )
}

export default Cell;