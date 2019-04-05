import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  

 handleClick = () => {
  var m  = this.props.getColor()
  this.setState({
   color: m
 })
}

  render() {
    return (
      <div className="cell" onClick = {this.handleClick}style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

  
}
