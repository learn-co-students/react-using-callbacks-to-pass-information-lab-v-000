import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = { selectedColor: '#000' }
  }
  // because I need access to selected color in both parent and a sibling from origin, make a getter
  getSelectedColor = () => (this.state.selectedColor)

  // class setter
  setSelectedColor = (colorHex) => {
    this.setState(
      {selectedColor: colorHex}
    )
  }
  // do I need () or {} or just the state?
  assignColor = (color) => {this.state.selectedColor}

  genRow = (vals) => (
    // vals.map((val, idx) => <Cell key={idx} color={val} />)   //ORIGINAL
    // add getter for new color value
    // vals.map((val, idx) => <Cell key={idx} getSelectedColor={this.getSelectedColor} />)    
    // color={val} isn't required for the color selection and user clicks, but it does set the initial image
    vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        {/* send a callback function like a props? */}
        {/* send out setter, to be used by child and returned. Then, in genRow, call with a getter */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
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
