import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColorForCell()
    });
    let colorTest = this.props.selectedColorForCell();
    console.log("A cell was clicked!", colorTest);
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
