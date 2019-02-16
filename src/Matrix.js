import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
    	selectedColor: 0
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell newColor={this.passColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

	setColor = (color) => {
		this.setState({
			selectedColor: color
		})
	}
	
	passColor = () => {
		return this.state.selectedColor;
	}

  render() {
    return (
      <div id="app">
        <ColorSelector defineColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
