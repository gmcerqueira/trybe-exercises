import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoAddBtn() {
  const { todo, addTodo } = useContext(TodoContext);
  return <button onClick={() => addTodo(todo)}>Add</button>;
}
