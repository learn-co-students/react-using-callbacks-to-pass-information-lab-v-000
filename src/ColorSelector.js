import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((hex) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
      const clickColor = () => { this.props.setSelectedColor(str) }
      return <div onClick={clickColor} className="color-swatch" style={{backgroundColor: hex}}/>
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
