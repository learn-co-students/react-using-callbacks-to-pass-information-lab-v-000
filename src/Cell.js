import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  cb = () => {
    this.setState({
      color: this.props.getSelectedColor()
    })
  }


  render() {
    return (
      <div className="cell" onClick={this.cb} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
