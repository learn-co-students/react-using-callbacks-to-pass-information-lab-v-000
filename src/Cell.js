import React, { Component } from 'react';

export default class Cell extends Component {

  // Matrix.genRow calls Cell which creates a div for each color value contained in the array of color values passed to it by Matrix.genMatrix. Cell renders the div with class and style attributes. The background color is set to this.state.color.
  render() {
    return (
      <div className="cell" onClick={this.props.setCellColor} style={{ backgroundColor: this.props.color }}>
      </div>
    )
  }

}
