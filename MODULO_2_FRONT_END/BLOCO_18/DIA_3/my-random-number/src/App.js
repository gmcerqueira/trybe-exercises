import React, { useState, useEffect } from "react";

function App() {
  const newNumber = () => Math.round(Math.random() * 100);

  const [randomNum, setRandomNum] = useState(newNumber());
  const [numMsg, setNumMsg] = useState("");

  useEffect(() => {
    setInterval(() => {
      setRandomNum(newNumber());
    }, 10000);
  }, []);

  useEffect(() => {
    if (randomNum % 3 === 0 || randomNum % 5 === 0) {
      setNumMsg("Acertou");

      setTimeout(() => setNumMsg(""), 4000);
    }
  }, [randomNum]);

  return (
    <div>
      <p>{randomNum}</p>
      <p>{numMsg}</p>
    </div>
  );
}

export default App;
