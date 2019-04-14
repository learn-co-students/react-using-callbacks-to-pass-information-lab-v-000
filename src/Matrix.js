import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  // using state to set the base initial color, ie., think of initial 'state'
  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
  }

  // modify state to pass the selected color between the children
  setColor = (c) => {
    this.setState({
      color: c
    })
  }

  getColor = () => (this.state.color)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.getColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


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
