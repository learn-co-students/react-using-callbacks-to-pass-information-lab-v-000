import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (color) => {
    const newColor = color()
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className="cell" onClick={() => this.handleClick(this.props.passedColor)} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
