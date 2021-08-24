import '../scss/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const JSX = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(JSX, document.getElementById('app'));
