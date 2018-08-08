import React, { Component } from 'react';
/**
update makeColorSwatches to provide the <div>s it is rendering with some way to fire off that method we wrote for Matrix (hint: consider using an event listener and controlling the argument when an event handler is fired)
this.props.selectColor(hexColor)
**/
export default class ColorSelector extends Component {

  handleClickColor = (str,event) => {
    this.props.setColor(str)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.handleClickColor.bind(this,str)} key={idx} className="color-swatch" style={{backgroundColor: str}}  />
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
