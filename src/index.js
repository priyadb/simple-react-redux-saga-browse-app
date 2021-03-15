import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/configureStore';
import './index.css';

import Router from './components/Router';

const rootElement = document.getElementById('main');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  rootElement
);
