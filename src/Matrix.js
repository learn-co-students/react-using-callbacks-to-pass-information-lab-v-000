import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js';



export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selector: this.props.state
    };
  };
  
setSelector = (currentColor) => {
  this.setState({
    selector: currentColor
  })
}

getSelector = () => (this.state.selector)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getSelector={this.getSelector}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelector={this.setSelector}/>
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
