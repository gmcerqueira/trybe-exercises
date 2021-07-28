import React, { useContext } from "react";
import RandomContext from "../context/RandomContext.jsx";

function RandomNumContainer() {
  const { randomNum, msg } = useContext(RandomContext);
  return (
    <div>
      <p>{randomNum}</p>
      <p> {msg}</p>
    </div>
  );
}

export default RandomNumContainer;
