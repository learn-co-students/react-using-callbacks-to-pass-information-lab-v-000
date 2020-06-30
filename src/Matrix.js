// Cell only needs to know the currently selected color.
  // We can pass this in to every Cell returned by genRow() as a prop called selectedColor:
// Matrix renders a div containing the ColorSelector component and another div. 
  // Within this nested div is a function call to this.genMatrix(). 
  // In this function, this.props.values is used to return a map of JSX divs.
// Tip: when using arrow functions, you can use parentheses instead of curly braces 
 // to implicitly return a value.
// In the process of returning each of these divs, genRow() is called, which returns a 
  // collection of Cell components.The Cell component itself just renders a div, 
  // so these two functions working together return a series of divs, each containing 
  // another series of divs. The actual color value stored in the data is passed into 
  // Cell as color={val}.
// Data is passed into Matrix as an array of arrays of strings. On render, this data is 
  // mapped to JSX elements. (With some CSS help,) these elements form rows of squares on the screen.
  // Rendered just above the Cells, we also have the ColorSelector component, which 
  // renders a row of colored divs. The ColorSelector component, as suggested by its name, 
  // should contain the interface for selecting a color. Once a color is selected, 
  // clicking on any particular Cell should cause that Cell to change to the selected color.
// To achieve our goals, the Matrix component needs to have the following:
  // A way for Matrix to keep track of the selected color (think state!)
  // A method that takes in a single argument of a hexadecimal color string (i.e. '#fff') 
  // and sets the selected color to that.
  // Once we have these set up, we'll need to figure out how to use the component's state, as 
  // well as the method that will update that state, in the ColorSelector and Cell components.

// Looking briefly at Cell, we can see that this color prop is used to set the initial state 
// of the component, and that state value is then used to modify the background color of 
// the returned div:

import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
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
        <ColorSelector setSelectedColor={this.setSelectedColor} />
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