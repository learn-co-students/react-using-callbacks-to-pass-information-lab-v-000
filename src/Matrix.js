import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
	// Here's where we'll keep track of the current selected color.
	state = {
		selectedColor: "#000"
	};

	// genRow receives an array of color values from genMatrix and generates a cell for each color value by calling the Cell component and passing in a color value (along with a key)
	genRow = vals => {
		return vals.map((val, idx) => {
			return (
				<Cell key={idx} color={val} setCellColor={this.setCellColor} />
			);
		})
	};

	// genMatrix is passed chromeBoi by Matrix. That's what the property "values" is referencing. chromeBoi is an array of arrays containing color values. Here genMatrix generates a row div for each child array. It also calls genRow(), which generates a cell for each color value in the array that genMatrix passes to it. Random: There are no curly braces after the arrow operator, just the "(" indicating the start of a block of JSX. And yet, we see vanilla JS without any curly braces around it
	genMatrix = () => {
		return this.props.values.map((rowVals, idx) => {
			return (
				<div key={idx} className="row">
					{this.genRow(rowVals)}
				</div>
			)
		});
	};

	// The new color is passed to setSelectedColor by the onClick event listener in ColorSelector.makeColorSwatches().
	setSelectedColor = e => {
		let color = e.target.style.backgroundColor;
		this.setState({ selectedColor: color });
	};

	// When the user click on a cell, the click listener fires this callback function which sets the cell's background color to the updated current selectedColor.
	setCellColor = e => {
		e.target.style.backgroundColor = this.state.selectedColor;
	};

	render() {
		return (
			<div id="app">
				<ColorSelector setSelectedColor={this.setSelectedColor} />
				<div id="matrix">{this.genMatrix()}</div>
			</div>
		);
	}
}

Matrix.defaultProps = {
	values: chromeBoi
};
