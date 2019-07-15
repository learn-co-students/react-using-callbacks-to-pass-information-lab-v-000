import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick() {
    this.props.currentColor(this.state.color)
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
