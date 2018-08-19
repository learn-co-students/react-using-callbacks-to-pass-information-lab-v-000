import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
  }

  handleChangeInColor = (newColor) => (
    this.setState({
        color: newColor
      }
    )
  )
  selectedColor = () => (
    this.state.handleChangeInColor
  )

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleChangeOfColor={this.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector getSelectedColor={this.handleChangeInColor}/>
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
