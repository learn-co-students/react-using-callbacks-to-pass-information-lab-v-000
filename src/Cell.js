import React, { Component } from 'react';
export default class Cell extends Component {

  constructor(props) {

    super(props)
    this.state = {
      selectedColor: this.props.color
    }
  }

  changeColor = () => {
    debugger
    this.setState( {
      selectedColor: this.props.getSelectedColor()
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.selectedColor}}>
      </div>
    )
  }
}
