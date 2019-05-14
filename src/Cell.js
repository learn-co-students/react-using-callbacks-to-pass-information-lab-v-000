import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
			hotColor: this.props.hotColor
    }
  }

	handleClick = (e) => (e.target.style.backgroundColor = this.state.hotColor())

  render() {
    return (
      <div className="cell" onClick={(e) => this.handleClick(e)} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
