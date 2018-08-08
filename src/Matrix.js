import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
/**

**/

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#000'
    }// end state

    this.setSelectedColor = this.setSelectedColor.bind(this)
  }//end constructor


  setSelectedColor(hexColor){
    this.setState({
     selectedColor: hexColor
   })//end this.setState
  }//end setSelectedColor

  passStateColor = () => {
    return this.state.selectedColor
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newCellColor={this.passStateColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setSelectedColor}/>
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
