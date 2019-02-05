import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selected_color: "#FFF"
    };
  }

  hex_color = hex => {
    return () => {
      this.setState({ selected_color: hex });
    };
  };
  // (this.state.selected_color = hex).setState(
  //   (this.state = { selected_color: hex }),
  //   (this.props = {
  //     hex_color: this
  //   })

  currentColor = () => this.state.selected_color;

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell currentColor={this.currentColor} key={idx} color={val} />
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
        <ColorSelector color={this.hex_color} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
