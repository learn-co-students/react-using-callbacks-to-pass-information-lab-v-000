import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  currentlySelectedColor = () => (this.state.color)

  selectedColor = (aColor) => {
    this.setState({ color: aColor })
  //  console.log(aColor)
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentlySelectedColor={this.currentlySelectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleClick={this.selectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
