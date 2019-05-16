import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let newColor = this.props.getSelectedColor()
    this.setState({color: newColor})
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
