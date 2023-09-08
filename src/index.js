// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ContactApp from './ContactApp';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ContactApp />
  </Provider>,
  document.getElementById('root')
);

