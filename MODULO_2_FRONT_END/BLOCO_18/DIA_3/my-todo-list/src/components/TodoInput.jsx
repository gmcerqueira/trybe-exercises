import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoInput() {
  const { handleTodoInput, addTodo, todo } = useContext(TodoContext);

  return (
    <label htmlFor="todoInput">
      Todo
      <input
        type="text"
        id="todoInput"
        name="todoInput"
        onChange={handleTodoInput}
        onKeyUp={({ key }) => (key === "Enter" ? addTodo(todo) : "")}
      />
    </label>
  );
}
