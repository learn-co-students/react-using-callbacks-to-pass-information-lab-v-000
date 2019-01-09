import React, { Component } from 'react';

export default class ColorOption extends Component {
  
  handleClick = ()=> {
    this.props.select(this.props.color)
  }
  
  render() {
    return (
      <div id="ColorOption" className="color-swatch" style={{backgroundColor: this.props.color}}/>
    )
  }
  
}
