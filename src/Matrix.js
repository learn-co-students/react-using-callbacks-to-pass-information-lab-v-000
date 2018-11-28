import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentBg: this.props.values
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={this.props.values} getCurrentBg={this.getCurrentBg} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  getCurrentBg = () => {
    return this.state.currentBg;
  }

  updateCurrentBg = (cellColor) => {
    this.setState({
      currentBg: cellColor
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector updateCurrentBg={this.updateCurrentBg}/>
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
