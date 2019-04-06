import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

// set initial color
  constructor() {
    super()
     this.state = {
       selectColor: '#FFF'
     }
  }

// allows update to newly selected color
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

// use for Cell.js to get newly selected color in event
  getSelectedColor = () => (this.state.selectedColor)

// allows input of new color in row of cells by index and color
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor = {this.getSelectedColor}/>)
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
