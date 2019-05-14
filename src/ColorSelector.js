import React, { Component } from 'react';

export default class ColorSelector extends Component {
	constructor (props) {
		super(props)

		this.state = {
      newColor: this.props.newColor
    }
	}  


  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

	handleClick = (e) => (this.state.newColor(e.target.style.backgroundColor))
	
  
  render() {
    return (
      <div id="colorSelector" onClick={(e) => this.handleClick(e)}>
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
