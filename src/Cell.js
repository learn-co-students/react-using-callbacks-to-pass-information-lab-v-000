import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color //this generates the chromeboi picture for the entire matrix
    }
  }

  handleClick = () => {
    const newColor = this.props.getSelectedColor // getting the default or new selected color depending on if new color was selected
    this.setState({
      color: newColor // setting the Cells color state to the newColor value
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
      </div>
    )
  }
  
}
