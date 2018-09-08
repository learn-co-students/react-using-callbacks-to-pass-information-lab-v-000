import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // let newColor = this.props.updateColor()
    this.setState({color: this.props.updateColor})
    // console.log("Cell " + this.state.color);
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
