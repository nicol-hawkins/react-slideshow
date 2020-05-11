import React, { Component } from 'react';
// import './FlowerInfo.css';


class FlowerInfo extends Component {  
  render() {
    return (
      <div className="FlowerInfo">
        <h1>{this.props.name}</h1>
        <h2>Scientific Name: <i>{this.props.botanicalName}</i></h2>
        <h3>Family: <i>{this.props.family}</i></h3>
        <h3>Order: <i>{this.props.order}</i></h3>
        <img src={this.props.flowerImage} style={{width: 500 + 'px', height: 'auto' }}/>

      </div>
    );
  }
}

export default FlowerInfo;
