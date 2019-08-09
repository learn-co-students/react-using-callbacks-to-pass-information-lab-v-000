import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    const clickParams = () => {this.props.setColor(str)}
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={clickParams} style={{backgroundColor: str}}/>
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
