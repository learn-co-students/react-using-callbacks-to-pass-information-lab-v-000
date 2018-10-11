import React, { Component } from 'react';
// import Matrix from './Matrix.js'

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  changeColor = () => {
    this.setState({
      color: this.props.update()
    })

  }

  render() {
    return (
      <div className="cell" onClick={() => this.setState({color: this.props.update})} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
