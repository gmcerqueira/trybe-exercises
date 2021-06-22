import React, { Component } from "react";
import PropTypes from "prop-types";
import TrafficSignalContext from "./TrafficSignalContext";

export default class TrafficSignalProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signal: { color: 'red' },
    };
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  changeSignal = (color) => {
    this.setState({ signal: { ...this.state.signal, color: color } });
  };

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;
    return (
      <TrafficSignalContext.Provider value={context}>{children}</TrafficSignalContext.Provider>
    );
  }
}
