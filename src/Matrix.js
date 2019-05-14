import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
		
		this.state = {
      color: this.props.values[0][0]
		}
  }

  genRow = (vals, hotColor) => (
    vals.map((val, idx) => <Cell key={idx} color={val} hotColor={hotColor} />)
  )

  genMatrix = (hotColor) => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals, hotColor)}</div>)
  )

	newColor = (colorString) => {const rgbSplit = colorString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
		this.setState({color: '#' + Number(rgbSplit[1]).toString(16) + Number(rgbSplit[2]).toString(16) + Number(rgbSplit[3]).toString(16)})}

	hotColor = () => {return this.state.color}

  render() {
    return (
      <div id="app">
        <ColorSelector newColor={this.newColor} />
        <div id="matrix">
          {this.genMatrix(this.hotColor)}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
