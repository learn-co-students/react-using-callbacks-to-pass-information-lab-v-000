import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    console.log(this.props.selectedCell())
    //set the state of the cell with new value of color
    const newColor = this.props.selectedCell()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick()}>
      </div>
    )
  }
  
}
