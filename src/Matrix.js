import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
//props and state are input data for the render function 
//a component cannot chnge it's props 
//state - serializable. can change the state of child components 
export default class Matrix extends Component {  //convert raw data into HTML

  state = { selectedColor: ""}

  setColor = (hex) => {
    this.setState({
      selectedColor: hex
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} setColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {   
    return (
      <div id="app">
        <ColorSelector color={this.setColor}/>
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
