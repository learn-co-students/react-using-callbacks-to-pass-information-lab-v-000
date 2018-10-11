import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // changeSelectedColor from Matrix - takes in a hex value.
      const new_color = () => {this.props.changeSelectedColor(str)};
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={new_color}/>
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
