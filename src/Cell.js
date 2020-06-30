// Cell, on the other hand, only needs to know the currently selected color, not change it. 

import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.color
    }
  }
  
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div className="cell"
           style={{backgroundColor: this.state.color}}
           onClick={this.handleClick}>
      </div>
    )
  }
  
}