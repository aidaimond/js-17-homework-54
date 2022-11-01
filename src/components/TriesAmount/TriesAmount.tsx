import React from "react";

interface Props {
  triesAmount: number;
}

const TriesAmount: React.FC<Props> = ({triesAmount}) => {
  return (
    <div>
      Tries: {triesAmount}
    </div>
  )
}


export default TriesAmount