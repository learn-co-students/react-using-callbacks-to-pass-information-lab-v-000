import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: "#F00"
    }
  }

  getColor = () => {
     return this.state.color
   }

  setColor = (hexString)  => {
    console.log(`just clicked ${hexString}`);

    this.setState({
      color: hexString
    });

    console.log(this.state.color)
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorSelect={this.getColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector colorValue={this.setColor}/>
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
