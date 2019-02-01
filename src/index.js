import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import chromeBoi from './data.js'
import Matrix from './Matrix.js'

// chromeBoi is an array of arrays containing color values
ReactDOM.render(<Matrix values={chromeBoi} />, document.getElementById('root'));
