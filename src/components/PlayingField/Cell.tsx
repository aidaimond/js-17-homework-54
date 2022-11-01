import React, {MouseEventHandler} from "react";

interface Props {
  item: boolean;
  onClick: React.MouseEventHandler;
}

const Cell: React.FC<Props> = (props) => {

  const cellStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '60px',
    height: '60px',
    background: 'lightgrey',
    border: '1px',
  };
  return (
    <div style={cellStyle} onClick={props.onClick}>
      {props.item}
    </div>
  )
}

export default Cell;