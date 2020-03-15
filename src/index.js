import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
console.log('My version', window.React1);
render(<App />, document.getElementById('root'));
