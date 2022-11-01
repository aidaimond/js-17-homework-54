import React from 'react';
import "./ResetButton.css"

interface Props {
  reset: React.MouseEventHandler<HTMLButtonElement>;
}

const ResetButton: React.FC<Props> = (props) => {
  return (
    <button className="ResetButton" onClick={props.reset}>Reset
    </button>
  );
};

export default ResetButton;