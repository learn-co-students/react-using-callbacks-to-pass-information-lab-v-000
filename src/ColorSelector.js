import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      //solution used const cb = () => this.props.setColor(str), then onClick={cb}. any difference with this method? can't test in browser atm :(
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={() => this.props.setColor(str)} />
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
