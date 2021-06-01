import React, { Component } from "react";
import InputTodo from "./InputTodo";
import Item from "./Item";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTask: undefined,
    };
  }

  addTodo = (todo) => {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  };

  selectTask = ({ target }) => {
    this.setState(() => ({ selectedTask: parseInt(target.id) }));
  };

  removeSelectedTask = () => {
    const list = this.state.listTodo;
    const indexToRemove = this.state.selectedTask;
    if (indexToRemove) {
      list.splice(indexToRemove - 1, 1);
      this.setState({ listTodo: list, selectedTask: undefined });
    }
  };

  render() {
    const { listTodo, selectedTask } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          removeItem={this.removeSelectedTask}
          selectedTask={selectedTask}
        />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <Item
                content={todo}
                key={index + 1}
                index={index + 1}
                click={this.selectTask}
                selected={selectedTask === index + 1}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default App;
