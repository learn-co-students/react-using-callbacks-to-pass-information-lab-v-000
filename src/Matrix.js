import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      matrixColor: "#0F0"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.getColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setColor = (cellColor) => {
    this.setState({
      matrixColor: cellColor
    })
  }

  getColor = () => {
    return this.state.matrixColor
  }


  render() {
    return (
      <div id="app">
      <ColorSelector setColor={this.setColor} />
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
