import React, { Component } from 'react';
// import './FlowerCarousel.css';

// import BoxSelector from '../BoxSelector/BoxSelector.js';
// import BookInfo from '../BookInfo/BookInfo.js';

class FlowerCarousel extends Component {  
  render() {
    // NOTE: This is only used for the Bonus Activity
    return (
      <div className="FlowerCarousel">
        {/* {
          Object.entries(this.props.data).map(([name, info]) => (
            name === this.props.selectedBook ? (
              <BookInfo
                title={name}
                key={name}
                author={info.author}
                coverImage={info.cover}
                release={info.releaseDate}
              />
            ): null    
          ))          
        }
       
       <BoxSelector
          choices={Object.keys(this.props.data)}
          selectedValue={this.props.selectedBook}
          onSelectionChange={this.props.onChange}
        /> */}

      </div>
    );
  }
}

export default FlowerCarousel;
