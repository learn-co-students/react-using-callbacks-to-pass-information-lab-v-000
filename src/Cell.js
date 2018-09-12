import React, { Component } from 'react';


export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateCellColor = () => {
    const cb = this.props.returnSelectedColor()
    this.setState({
      color: cb
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.updateCellColor}>
      </div>
    )
  }
  
}
