import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: '#fff'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
  
  // Function to update color
  selectColor = (color) => {
    this.setState ({
      currentColor: color
    })
    // console.log('Set Matrix color = ', color)
  }
  
  // Function to return current color for Cell
  selectedColor = () => (
    this.state.currentColor
  )

  render() {
    return (
      <div id="app">
        <ColorSelector selectColor={this.selectColor}/>
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
