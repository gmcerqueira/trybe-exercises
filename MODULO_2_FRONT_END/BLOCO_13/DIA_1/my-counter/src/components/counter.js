import React, { Component } from 'react'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ counter: 10 })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { counter } = nextState
    console.log("shouldComponentUpdate", this.state, nextState);
    return (counter < 13 || counter > 15)
  }

  componentDidUpdate(_prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter