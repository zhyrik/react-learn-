import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'ZAZ', year: 2000},
      {name: 'Audi', year: 2018},
      {name: 'Audi', year: 2012}
    ],
    title: 'Hello World!',
    flag: true
  }

  newTitle = (title) => {
    this.setState({
      title
    })
  }

  writeNewName = (name, index) => {
    const cars = [...this.state.cars]
    cars[index].name = name
    this.setState({cars})
  }

  deleteCar (index) {
    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({cars})
  }

  changeFlag = () => {
    this.setState({flag: !this.state.flag})
  }

  inputTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{color: 'red', textTransform: 'uppercase'}}>{this.state.title}</h1>
        <input type="text" onChange={this.inputTitle} />
        <button onClick={this.changeFlag}>{this.state.flag ? "Hide" : "Show"}</button>
        {this.state.flag ? 
          this.state.cars.map((car, index) => {
            return (
            <Car
              name={car.name}
              year={car.year}
              delete={this.deleteCar.bind(this, index)}
              writeNewName={(event) => this.writeNewName(event.target.value, index)}
              key={index} />
            )
          })
          : null
        }
      </div>
    )
  }
}

export default App
