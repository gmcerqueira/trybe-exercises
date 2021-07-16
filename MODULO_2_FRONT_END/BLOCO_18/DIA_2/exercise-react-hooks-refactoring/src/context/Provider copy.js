// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  
  const inicial = {
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  }

  const [cars, setCars] = useState(inicial)

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const context = {
    ...cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
  
};

export default Provider;
