import { useState, useEffect } from "react";

const useTimer = () => {
  const createNum = () => {
    const num = Math.round(Math.random() * 100);
    if (num % 3 === 0 || num % 5 === 0) setMsg("Acerto");
    return num;
  };

  const [randomNum, setRandomNum] = useState();
  const [timer, setTimer] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(() => setMsg(""), 4000);
    setRandomNum(createNum());
    setTimeout(() => setTimer(!timer), 10000);
  }, [timer]);
  
  return [randomNum, msg];
};

export default useTimer;
