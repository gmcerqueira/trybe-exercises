import React, { Component } from "react";
import PropTypes from "prop-types";
import CarContext from "./CarsContext";

export default class CarsProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    };
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  moveCar = (car, side) => {
    this.setState({ cars: { ...this.state.cars, [car]: side } });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    const { children } = this.props;
    return (
      <CarContext.Provider value={context}>{children}</CarContext.Provider>
    );
  }
}
