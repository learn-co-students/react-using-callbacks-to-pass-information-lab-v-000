import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#FFF"
    };
  }

  updateColor = newColor => {
    this.setState({
      color: newColor
    });
  };

  getColor = () => this.state.color;

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getColor={this.getColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector updateColor={this.updateColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
