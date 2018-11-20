import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state={
      selectedColor: '#000'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} callbackForCell={this.callbackForCell}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  callbackForCell = () => {
    return this.state.selectedColor    
  }

  callbackForColorSelector = (dataFromColorSelector) => {
    this.setState({
      selectedColor: dataFromColorSelector
    })
  }

  render() {
    return (
      <div id="app">
        <ColorSelector callbackForColorSelector={this.callbackForColorSelector}/>
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
