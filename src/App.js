import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'ZAZ', year: 2000},
      {name: 'Audi', year: 2018},
      {name: 'Audi', year: 2012}
    ]
  }

  render() {
    const cars = this.state.cars
    return (
      <div className="App">
        <h1 style={{color: 'red', textTransform: 'uppercase'}}>Hello world!</h1>
        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}

export default App;
