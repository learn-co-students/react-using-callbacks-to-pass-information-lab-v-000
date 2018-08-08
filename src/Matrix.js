import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => { 
      return <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />
    })
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  getSelectedColor = () => {
    return this.state.selectedColor
  }

  setSelectedColor = (hexColor) => {
    this.setState({
      selectedColor: hexColor
    })
  }

  render() {
    return (
      <div id="app">
        <ColorSelector onSelectColor={this.setSelectedColor} />
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
