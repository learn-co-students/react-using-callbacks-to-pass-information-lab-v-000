import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={this.handleColorSelection}/>
    })
  )

  handleColorSelection = (e) => {
    this.props.onColorSelection(e.target.style.backgroundColor)
  }
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
// When I render Matrix parent component (see Matrix component's render method),
// I'm rendering ColorSelector child component, passing in the object below as its props:
// {selectedColor: string hex stored in state object, onColorSelection: handleColorSelection callback function object}
  
