import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

//import redux software
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";

//needed for logger?
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// import components
import './index.css';
import App from './App';
import combineReducers from './reducers';

const store = createStore(combineReducers, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store = {store}>
    <Router>
    <App />
  </Router>,
  document.getElementById('root')
  </Provider>
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
