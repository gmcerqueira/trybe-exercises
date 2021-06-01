import React, { Component } from "react";
import PropTypes from "prop-types";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: "",
    };
  }

  changeTextTodo = (value) => {
    this.setState({ textTodo: value });
  };

  addItem(value, callback) {
    this.setState({ textTodo: "" });
    callback(value);
  }

  render() {
    const { addTodo, removeItem, selectedTask } = this.props;
    const { textTodo } = this.state;
    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input
          id="btnAdd"
          type="button"
          value="Adicionar"
          onClick={() => this.addItem(textTodo, addTodo)}
        />
        <input
          disabled={selectedTask ? false : true}
          id="id-remove"
          data-testid="id-remove"
          type="button"
          value="Remover"
          onClick={removeItem}
        />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
