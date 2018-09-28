import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: this.props.color
    }
  }

  setColor = () => {
    let clr = this.props.sentColor()
    console.log(clr)
    this.setState({
          color: clr
        })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={ this.setColor }>
      </div>
    )
  }

}
