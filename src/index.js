import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunkMiddleware from 'redux-thunk'
//import { createLogger } from 'redux-logger'

import { createStore, applyMiddleware  } from 'redux'

import { fetchPosts } from './actions'

import { Provider } from 'react-redux'
import rootReducer from './reducers'


//const loggerMiddleware = createLogger();


const store = createStore(rootReducer,applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    //loggerMiddleware // neat middleware that logs actions
  ));

//console.log(store.getState());

/*store.dispatch(selectSubreddit('reactjs'))*/
store.dispatch(fetchPosts('sets')).then(() => console.log(store.getState()))

/*store.dispatch({ 
	type: 'ADD_TODO',
	id:11,
	text:'test'
 });	
*/
ReactDOM.render(
	<Provider store={store}>
    	<App />
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
