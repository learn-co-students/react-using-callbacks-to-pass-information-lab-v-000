import React, { Component } from 'react';

export default class ColorSelector extends Component {


  // this.props.changeColor(event.target.style.backgroundColor)

  // this.setState({
  //   colorSelected: event.target.style.backgroundColor
  // })

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const cb = () => {this.props.changeColorState(str)}
      return <div onClick={cb} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
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
