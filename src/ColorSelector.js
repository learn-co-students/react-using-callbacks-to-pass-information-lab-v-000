import React, { Component } from 'react';


export default class ColorSelector extends Component {
    
  changeColor(hex) {
    this.props.setColor(hex)
  }



  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={(e) => this.changeColor(str)} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
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
