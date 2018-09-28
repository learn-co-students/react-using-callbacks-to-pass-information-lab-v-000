import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      currentSelectedColor: ''
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} sentColor={ this.sendColor }/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  passColor = (color) => {
                this.setState({
                currentSelectedColor: color
                })
            }

  sendColor = () => {
    return this.state.currentSelectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector passColor={this.passColor}/>
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
