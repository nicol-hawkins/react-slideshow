import React, { Component } from 'react';
import './App.css';

import FlowerCarousel from './components/FlowerCarousel/FlowerCarousel';
import FlowerInfo from './components/FlowerInfo/FlowerInfo';

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
        {
          Object.entries(this.state.flowerData).map(([name, info]) => (
            <FlowerInfo
              title={name}
              botanicalName={info.botanical_name}
              family={info.family}
              order={info.order}
              flowerImage={info.image}
            />
          ))
        }


      </div>
      )

  }
  
}

export default App;
