import { useState } from "react";

const useArray = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoInput) => {
    if (todoInput) setTodos([...todos, todoInput]);
  };

  return [todos, addTodo];
};

export default useArray;
