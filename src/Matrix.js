import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {


 constructor() {
    super()
    this.state = {
      color: "#fff"
    }
  }

  selectColor = (newColor) =>{
    this.setState({
      color: newColor
    })
  }

  returnState = () =>{
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell currentColor={this.returnState} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )



  render() {
    return (
      <div id="app">
        <ColorSelector colorSetter={this.selectColor}/>
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
