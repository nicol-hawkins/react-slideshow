import React, { Component } from 'react';
import './App.css';

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

  


  render() {
    return (
      <div className="App">




      </div>
      )

  }
  
}

export default App;
