import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick(e) {
    this.setState({
      color: this.props.newColor()
    })
  }
  
  render() {
    return (
      <div className="cell" onClick={(e) => this.handleClick(this.props)} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
