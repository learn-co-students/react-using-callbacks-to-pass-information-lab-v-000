import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  render() {
    const handleClick = () => {
      this.setState({
        color: this.props.currentColor()
      })
    }
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={handleClick}>
      </div>
    )
  }
  
}
