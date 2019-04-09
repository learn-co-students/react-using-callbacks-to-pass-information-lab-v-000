import React, { Component } from 'react';
import chromeBoi from './data.js';
import Cell from './Cell.js';
import ColorSelector from './ColorSelector.js';

export default class Matrix extends Component {
	constructor() {
		super();

		this.state = {
			color: '#FFF'
		};
	}

	genColor = (c) => {
		this.setState({
			color: c
		});
	};

	getSelectedColor = () => {
		return this.state.color;
	};

	genRow = (vals) => vals.map((val, idx) => <Cell key={idx} color={val} getSelectedColor={this.getSelectedColor} />); // replace me and render a cell component instead!

	genMatrix = () =>
		this.props.values.map((rowVals, idx) => (
			<div key={idx} className="row">
				{this.genRow(rowVals)}
			</div>
		));

	render() {
		return (
			<div id="app">
				<ColorSelector getSelectedColor={this.getSelectedColor} genColor={this.genColor} />
				<div id="matrix">{this.genMatrix()}</div>
			</div>
		);
	}
}

Matrix.defaultProps = {
	values: chromeBoi
};
