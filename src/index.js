import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Sets from './Sets.js';
import Cards from './Cards.js';

import * as serviceWorker from './serviceWorker';

import thunkMiddleware from 'redux-thunk'
//import { createLogger } from 'redux-logger'

import { createStore, applyMiddleware  } from 'redux'

import { fetchSets } from './actions'
import { fetchCards } from './actions'

import { Provider } from 'react-redux'
import rootReducer from './reducers'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//const loggerMiddleware = createLogger();


const store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  ));


/*store.dispatch(selectSubreddit('reactjs'))*/
//store.dispatch(fetchPosts('sets')).then(() => console.log(store.getState()))
store.dispatch(fetchSets('sets'));
//store.dispatch(fetchCards("neo3"));

/*store.dispatch({ 
	type: 'ADD_TODO',
	id:11,
	text:'test'
 });	
*/
ReactDOM.render(
	<Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Sets}  />
        <Route path="/:code" component={Cards}  />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
