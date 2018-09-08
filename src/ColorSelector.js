
import React, { Component } from 'react';

export default class ColorSelector extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx}
      className="color-swatch"
      onClick={this.handleClick}
      style={{backgroundColor: str}}/>
    })
  )
  handleClick(e){
    let color =  e.target.style.backgroundColor
    console.log("ColorSelector" + color);
    this.props.setColor(color)
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
