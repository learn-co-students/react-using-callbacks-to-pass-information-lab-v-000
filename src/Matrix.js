import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super();
    this.state = {
      selectedColor: "#FF6347"
    }
  }

  setColor = (color) => {
    this.setState({
      selectedColor: color
    });
    console.log(`set Color says chosen color is ${color}`);
  }

  sendColorToCell = () => {
    return this.state.selectedColor;
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} sendColorToCell={this.sendColorToCell}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
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
