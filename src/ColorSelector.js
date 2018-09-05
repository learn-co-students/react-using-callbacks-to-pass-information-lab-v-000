import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      
      let boundColor = () => this.props.setSelectedColor(str)
      
      return <div key={idx} 
      className="color-swatch" 
      style={{backgroundColor: str}}
      onClick= { boundColor}
      />
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}



// update makeColorSwatches to provide the <div>s it is
//  rendering with some way to fire off that method we wrote for Matrix 
//  (hint: consider using an event listener and controlling the argument when an event handler is fired)