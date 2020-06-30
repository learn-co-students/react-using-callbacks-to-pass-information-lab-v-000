// The ColorSelector component already has some basic divs rendering.

// Each div element is rendered from an array of hexadecimal color strings, with its 
  // backgroundColor set to the value of the current string in the mapping process.

// Updated this code so that when any one of these divs is clicked the 
  // hexadecimal color value of that div becomes the selected color in Matrix. For click events, 
  // we know we'll have to add an event and provide a callback on the div element itself:

  import React, { Component } from 'react';

  export default class ColorSelector extends Component {
  
    makeColorSwatches = () => (
      ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
        const cb = () => { this.props.setSelectedColor(str) }
        return <div key={idx} onClick={cb} className="color-swatch" style={{backgroundColor: str}}/>
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