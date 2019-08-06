import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      setColorFoo: this.props.setColorFoo
    }
  }

 
  render() {
    return (
      <div className="cell" onClick={this.state.setColorFoo(this)} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
