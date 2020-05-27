import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
//import redux software
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// import components
import './index.css';
import App from './App';
import combineReducers from './store/reducers';

const store = createStore(
  combineReducers
  // , applyMiddleware(logger)
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
