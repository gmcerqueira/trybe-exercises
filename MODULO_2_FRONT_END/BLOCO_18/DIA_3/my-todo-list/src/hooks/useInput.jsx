import { useState } from "react";

const useInput = () => {
  const [todo, setTodo] = useState("");

  const handleTodoInput = ({ target }) => {
    setTodo(target.value);
  };

  return [todo, handleTodoInput];
};

export default useInput;
