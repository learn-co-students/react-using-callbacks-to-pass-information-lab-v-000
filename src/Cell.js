import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color//i don't understand where this is coming from 
    }
  }
  handleClick=()=>{
    const newColor = this.props.getSelectedColor()
    this.setState({
      color: newColor
    })
   }

  render() {
    return (
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
  
}
