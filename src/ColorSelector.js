import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => {
    return ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      //This needs to be an arrow funciton so it doesn't get called. You have an empty argument in there, making it just another callback function
      return (<div onClick={() => this.props.setColor(str)} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    )})
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
