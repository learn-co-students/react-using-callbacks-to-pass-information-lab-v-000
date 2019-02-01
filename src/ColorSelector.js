import React, { Component } from 'react';

// Matrix calls ColorSelector 
export default class ColorSelector extends Component {

  // setColor is defined in Matrix. The event listener is set here and calls setColor when the user chooses a new color. This callback allows ColorSelector to notify Matrix of a change in state. Matrix can then pass that change to 
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div id={idx} key={idx} className="color-swatch" onClick={this.props.setSelectedColor} style={{ backgroundColor: str }} />
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
