import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose ,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import App from './containers/login/login';
import loginReducer from './reducers/login';
import thunk from "redux-thunk";
import logger from 'redux-logger';

import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'

// Add Firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  loginReducer
})

// Firebase config
const config = {
  apiKey: "AIzaSyAueWsWmDMxI8grHw9nt1vwX78nhUOZ5P4",
  authDomain: "bug-tracker-app.firebaseapp.com",
  databaseURL: "https://bug-tracker-app.firebaseio.com",
  projectId: "bug-tracker-app",
  storageBucket: "bug-tracker-app.appspot.com",
  messagingSenderId: "46954325452"
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore)


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




