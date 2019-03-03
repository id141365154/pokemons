import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Sets from './Sets.js';
import Cards from './Cards.js';
import NotFound from './NotFound/NotFound.js';

import * as serviceWorker from './serviceWorker';

import thunkMiddleware from 'redux-thunk'
//import { createLogger } from 'redux-logger'

import { createStore, applyMiddleware  } from 'redux'

import { fetchSets } from './actions'


import { Provider } from 'react-redux'
import rootReducer from './reducers'


import { BrowserRouter, Route, Switch } from "react-router-dom";


//const loggerMiddleware = createLogger();


const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  ));

store.dispatch(fetchSets('sets'));


ReactDOM.render(
	<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Sets}  />
        <Route exact path="/:code" component={Cards}  />
        <Route path="/" component={NotFound}  />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
