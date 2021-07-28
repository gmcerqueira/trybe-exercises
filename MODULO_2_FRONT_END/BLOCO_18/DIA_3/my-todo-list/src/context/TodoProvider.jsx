import useArray from "../hooks/useArray";
import useInput from "../hooks/useInput.jsx";
import TodoContext from "./TodoContext";

function TodoProvider({ children }) {
  const [ todos,  addTodo ] = useArray()
  const [todo,  handleTodoInput ] = useInput()

  const context = { todo, todos, handleTodoInput, addTodo };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
