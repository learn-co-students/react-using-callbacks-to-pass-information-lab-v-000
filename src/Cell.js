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
      color: this.props.sendColorToCell()
    });
    console.log(`cell- the color I received was ${this.props.sendColorToCell()}`)
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
  
}
