import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#fff'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorGetter={this.colorGetter} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  colorSetter = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  colorGetter = () => (this.state.selectedColor);


  render() {
    return (
      <div id="app">
        <ColorSelector colorSetter={this.colorSetter} />
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
