import RandomContext from "./RandomContext";
import useTimer from "../hooks/useTimer";

function RandomProvider({ children }) {
  const [randomNum, msg] = useTimer();

  const context = { randomNum, msg };

  return (
    <RandomContext.Provider value={context}>{children}</RandomContext.Provider>
  );
}

export default RandomProvider;
