import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const changeColor = this.props.retrieveSelectedColor()
    this.setState({
      color: changeColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}
