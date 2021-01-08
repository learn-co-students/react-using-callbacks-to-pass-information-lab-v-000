import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js' //child component
import ColorSelector from './ColorSelector.js' //child component

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

   // this method updates the selectedColor to whatever newColor is passed in as the argument. 
  setSelectedColor = (newColor) => {
    this.setState({ selectedColor: newColor })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}