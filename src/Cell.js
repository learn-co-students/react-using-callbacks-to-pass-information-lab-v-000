import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  // Update cell state with selected color
  handleClick = () => {
    const chosenColor = this.props.selectedColor()
    // console.log('cell click = ', chosenColor)
    this.setState({
      color: chosenColor
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

