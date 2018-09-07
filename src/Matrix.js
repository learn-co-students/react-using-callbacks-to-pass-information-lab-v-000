import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: '#FFF'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val}  currentColor={this.currentColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  currentColor = () => {
    this.state.color
  }

  trackColor = (nextColor) => {
    this.setState({
      color: nextColor
    })
  }

  render() {
    return (
      <div id="app">
        <ColorSelector trackColor={this.trackColor}/>
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
