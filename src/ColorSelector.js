import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={ this.getColor } key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  getColor = (event) => {
      const pickedColor = event.currentTarget.style.backgroundColor;
      this.props.getSelectedColor(pickedColor);
  }


  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
