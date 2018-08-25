import React, { Component } from 'react';

export default class ColorSelector extends Component {

  // constructor(props){
  //   super(props)

  // }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.setColor} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  setColor = (event) => {
    console.log(event.target.style.backgroundColor)
    this.props.setColor(event.target.style.backgroundColor)
  }
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
