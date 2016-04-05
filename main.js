//main.js

// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    // <App Settings = Settings/>,
    React.createElement(App, Props),
    document.getElementById('container')
);