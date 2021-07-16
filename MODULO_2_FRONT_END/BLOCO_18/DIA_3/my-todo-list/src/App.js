import TodoProvider from './context/TodoProvider'
import TodoInput from './components/TodoInput'
import TodoAddBtn from './components/TodoAddBtn'
import TodosList from './components/TodosList'

function App() {
  return (
    <TodoProvider>
      <TodoInput />
      <TodoAddBtn />
      <TodosList />
    </TodoProvider>
  );
}

export default App;
