import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }

  clickEvent = event => {
    this.setState({
      color: this.props.currentColor()
    });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.clickEvent}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
