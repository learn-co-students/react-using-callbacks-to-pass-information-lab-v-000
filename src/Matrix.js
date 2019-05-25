import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: ''
    }
    this.setCurrentColor=this.setCurrentColor.bind(this)
    this.getCurrentColor=this.getCurrentColor.bing(this)
  }

  genRow = (vals) => (
  vals.map((val, idx) => <Cell key={idx} getCurrentColor={this.getCurrentColor} color={this.state.color}/>)
)

genMatrix = () => (
  this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
)

setCurrentColor(colorValue) {
  this.setState({
    color: colorValue,
  })
}

getCurrentColor = () => {
  this.state.color
}

  render() {
    return (
      <div id="app">
        <ColorSelector setCurrentColor={this.setCurrentColor}/>
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