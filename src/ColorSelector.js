import React, { Component } from 'react';

export default class ColorSelector extends Component {

  constructor(props){
	super(props); 
	this.state = {
		colorSelect: this.props.colorSelect 
	}
  }
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div onClick={this.selectingColor(str).bind(this)} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  selectingColor(color){
	return () => {
		this.state.colorSelect(color)
	}
  }
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
