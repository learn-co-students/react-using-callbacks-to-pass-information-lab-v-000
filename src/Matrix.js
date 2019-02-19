import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = { selectedColor: "#fff" };
  }

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell
        selectedColorForCell={this.selectedColorForCell}
        key={idx}
        color={val}
      />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  selectedColorForCell = () => {
    return this.state.selectedColor;
  };

  setColor = hexColor =>
    this.setState({
      selectedColor: hexColor
    });

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
