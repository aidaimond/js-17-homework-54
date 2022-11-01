import React from "react";

interface Props {
  triesAmount: number;
}

const TriesAmount: React.FC<Props> = ({triesAmount}) => {

  const triesStyle: React.CSSProperties = {
    marginTop: '20px',
  }
  return (
    <div style={triesStyle}>
      Tries: {triesAmount}
    </div>
  )
}

export default TriesAmount