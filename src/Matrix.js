import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props);
    this.state = {currentColor: null}
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.getColor} />)
  );

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  );

  setColor = (color) => {
    this.setState({currentColor: color});
  }

  getColor = () => (this.state.currentColor);

  render() {
    return (
      <div id="app">
        <ColorSelector setCurrentColor={this.setColor} />
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
