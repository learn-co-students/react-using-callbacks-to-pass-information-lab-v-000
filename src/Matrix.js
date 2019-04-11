import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  //set initial color
  constructor() {
    super()
    this.state = {
      selectedColor: '#fff'
    }
  }

  //update to a newly selected color
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  //use for Cell.js to get the newly selected color
  getSelectedColor = () => (this.state.selectedColor)


 //lets input of new color in the row of cells by index and color
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor}/>)
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
  values: chromeBoi
}
