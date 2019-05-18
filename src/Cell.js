import React, { Component } from 'react';

export default class Cell extends Component { 

  state = {
    color: this.props.color
  }

  handleOnClick = () => {
    // pass a function as a prop to Cell from Matrix
    // instead of the explicit value as a prop
    // in order to change the cell color
    const nextColor = this.props.getNextColor()
    this.setState({
      color: nextColor
    })
  }
     
  render() {
    return (
      <div className="cell" 
           style={{backgroundColor: this.state.color}}
           onClick={this.handleOnClick}>
      </div>
    )
  }
}
