import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // setSwatch = () => {
  //   setColor(str)
  //   //  clicked swatch fills cell 
  // }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={this.setColor(str)} style={{backgroundColor: str}}/>
    })
  )

  //AAQ: Would you ever call on the parent component directly in a child component (<Matrix />)
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
