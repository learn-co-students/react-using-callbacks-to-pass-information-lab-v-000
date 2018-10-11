import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  // makeColorSwatches = () => (
  //   ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
  //     return <div key={idx} onClick={this.handleClick.bind(this,str)} className="color-swatch" style={{backgroundColor: str}}/>
  //   })
  // )
  
  // handleClick = (colorString,e) => {
  //   this.props.setColor(colorString)
  // }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const cb = () => { this.props.setColor(str) }
      return <div key={idx} onClick={cb} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector"  >
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
