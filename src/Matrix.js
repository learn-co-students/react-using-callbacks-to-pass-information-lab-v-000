import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: "#FFF"
    }
  }

  whatColor = (hexColor) => {

    this.setState ({
      selectedColor: hexColor
    })
  }

  changeColor = () => (this.state.selectedColor)


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeColor={this.changeColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector whatColor={this.whatColor}/>
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
