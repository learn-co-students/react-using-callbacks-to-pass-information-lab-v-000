import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super();
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  getSelectedColor = () => (this.state.selectedColor)

  genRow = (vals) => (
    vals.map((val, i) => <Cell key={i} color={val} getSelectedColor={this.getSelectedColor}/>)
  )

  genMatrix = () => (
    this.props.startingImage.map((rowVals, i) => <div key={i} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  startingImage: chromeBoi
}
