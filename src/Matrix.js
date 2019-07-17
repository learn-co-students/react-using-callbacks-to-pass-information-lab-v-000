import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#000'
    }
  }

  newColor = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  selectedCell = () => this.state.selectedColor

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector newColor={this.newColor} />
        <div id="matrix">
          {this.genMatrix()}
          <Cell selectedCell={this.selectedCell}/>
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
