import { useContext } from "react";
import TodoContext from "../context/TodoContext.jsx";

function TodosList() {
  const { todos } = useContext(TodoContext);

  return (
    <ol>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ol>
  );
}

export default TodosList;
