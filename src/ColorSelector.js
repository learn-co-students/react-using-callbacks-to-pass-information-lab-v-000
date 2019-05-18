import React, { Component } from 'react';
import colorSwatches from './colorSwatches'

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (

    colorSwatches.map((str, idx) => {
      // execute the setColor method in Matrix 
      // when a specific color swatch is clicked
      // in order to change cells' color
      const colorChange = () => {this.props.setColor(str)}

      return <div key={idx}
                  className="color-swatch" 
                  style={{backgroundColor: str}}
                  onClick={colorChange} />
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
