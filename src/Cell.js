import React, { Component } from 'react';
import {passState} from './Matrix.js'

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    this.setState( {
      color: passState()
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
