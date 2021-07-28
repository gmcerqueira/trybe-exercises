import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider ({children}) {
  
  const inicialCars = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  }

  const inicialSignal = {
    color: 'red',
  }

  const [ cars , setCars ] = useState(inicialCars)
  const [ signal , setSignal ] = useState(inicialSignal)
  

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      color: signalColor,
    });
  };


  const context = {
    cars,
    signal,
    moveCar,
    changeSignal,
  };


  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
  
};

export default Provider;