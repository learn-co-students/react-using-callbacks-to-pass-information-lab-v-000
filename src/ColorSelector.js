import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = (event) => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const getColor = () => { 
        // console.log('color select : ', str)
        this.props.selectColor(str) 
        
      }
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={getColor}/>
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
