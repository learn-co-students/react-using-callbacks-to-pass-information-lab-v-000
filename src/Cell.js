import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.getCurrentColor
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.props.color}}>
      </div>
    )
  }

}