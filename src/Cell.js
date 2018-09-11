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
    //setState takes in an argument, which is why the parenthesis are on the outside of the javascript on the inside
    this.setState( {
      selectedColor: this.props.getSelectedColor()
    })
  }

  render() {
    return (
      //changeColor actually changes the cell's color through the propert of state's 'selectedColor'
      //backgroundColor changes automatically as according to whatever state is
      <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.selectedColor}}>
      </div>
    )
  }
}
