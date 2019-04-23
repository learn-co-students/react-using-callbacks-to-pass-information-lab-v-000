import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateColor = () => {
    let selectedColor = this.props.getColor()
    this.setState({color: selectedColor})
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.updateColor}>
      </div>
    )
  }

}
