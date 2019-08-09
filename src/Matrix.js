import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
import { timingSafeEqual } from 'crypto';

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
       selectedSwatch: '#fff' }
  }

  setColor = ( colorStr ) => {
    this.setState({
      selectedSwatch: colorStr
    })
  }

  passStateToCell = () => {
    this.state.selectedSwatch
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} passStateToCell={this.passStateToCell} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={ this.setColor } />
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
