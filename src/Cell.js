import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState({
      color: this.props.accessColorChoice()
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }
  
}

{/*
// When I render each Cell component in genRow method in Matrix.js with the code
// <Cell key={idx} color={val} accessColorChoice={this.accessColorChoice} />
// I pass in the following object as its props:
// {color: string hex, accessColorChoice: accessColorChoice callback function object}
*/}