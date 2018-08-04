import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colorSelected: ''
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell colorChange={this.colorChange} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  changeColorState = (string) => {
    this.setState({
      colorSelected: string
    })
  }

  colorChange = () => {
    return this.state.colorSelected
  }

  render() {
    return (
      <div id="app">
        <ColorSelector changeColorState={this.changeColorState}/>
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
