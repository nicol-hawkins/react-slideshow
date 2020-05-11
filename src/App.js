import React, { Component } from 'react';
import './App.css';

import FlowerCarousel from './components/FlowerCarousel/FlowerCarousel';

class App extends Component {
  state = {
    flowerData: {},
    selectedFlower: "Foxglove"
  }

  componentDidMount = () => {
    fetch('./images/flower_data.json')
      .then(response => response.json())
      .then(data => {
        console.log('Got the data! ', data)

        this.setState({
          flowerData: data
        })
      })
  }

  onFlowerSelection = (newFlowerSelection) => {
    console.log('New flower: ', newFlowerSelection)
    this.setState({
      selectedFlower: newFlowerSelection
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Flower Carousel</h1>
        <FlowerCarousel/>


      </div>
      )

  }
  
}

export default App;
