import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: this.props.selectedColor
    }
  }

  setColor = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
//getSelectedColor is passed to Cell because we need to know the MATRIX's state property: selectedColor, which is the color that has been chosen from ColorSelector. It's the color the cells will change into
//setColor gets the color from ColorSelector, who calls it and sends it up the parent function through a callback
  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi,
  selectedColor: '#fff'
}
