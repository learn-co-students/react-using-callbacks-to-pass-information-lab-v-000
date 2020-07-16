import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // callback = (color) => {
  //   this.props.setSelectedColor(color)
  // } That won't work; I'd still need to pass the color to it from makeColorSwatches, which then requires onClick={() => {this.callback(str)}}
  // It would make more sense in that case to just do onClick={() => this.props.setSelectedColor(str)}

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}} />
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
