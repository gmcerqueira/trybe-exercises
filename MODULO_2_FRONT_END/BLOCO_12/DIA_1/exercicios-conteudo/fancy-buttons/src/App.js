import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      numOfClicks1: 0,
      numOfClicks2: 0,
      numOfClicks3: 0,
    }


    this.handleClickButton1 = this.handleClickButton1.bind(this)
    this.handleClickButton2 = this.handleClickButton2.bind(this)
    this.handleClickButton3 = this.handleClickButton3.bind(this)
  }

  handleClickButton1() {
    this.setState(oldState => ({
      numOfClicks1: oldState.numOfClicks1 + 1,
    }))
  };

  handleClickButton2() {
    this.setState(oldState => ({
      numOfClicks2: oldState.numOfClicks2 + 1,
    }))
  }

  handleClickButton3() {
    this.setState(({ numOfClicks3 }) => ({
      numOfClicks3: numOfClicks3 + 1,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickButton1}>{this.state.numOfClicks1}</button>
        <button onClick={this.handleClickButton2}>{this.state.numOfClicks2}</button>
        <button onClick={this.handleClickButton3}>{this.state.numOfClicks3}</button>
      </div>
    )
  }
}
export default App;
