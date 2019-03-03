import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import Sets from './components/Sets/Sets.js';
import Cards from './components/Cards/Cards.js';
import NotFound from './components/NotFound/NotFound.js';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import { fetchSets } from './actions'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { BrowserRouter, Route, Switch } from "react-router-dom";


const store = createStore(rootReducer, applyMiddleware(
	thunkMiddleware, // lets us dispatch() functions
	//loggerMiddleware // neat middleware that logs actions
));



const setsPageSize = 30;
store.dispatch(fetchSets({
	pageSize: setsPageSize,
	page: 1
}));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Sets} />
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