import fetch from 'cross-fetch'


export const RECEIVE_SETS = 'RECEIVE_SETS'

function receiveSets(subreddit, json) {
	return {
		type: RECEIVE_SETS,
		subreddit,
		posts: json.sets,
		receivedAt: Date.now()
	}
}

export const RECEIVE_CARDS = 'RECEIVE_CARDS'

function receiveCards(subreddit, json) {
	return {
		type: RECEIVE_CARDS,
		subreddit,
		posts: json.cards,
		receivedAt: Date.now()
	}
}

export const CLEAR_CARDS = 'CLEAR_CARDS'
export function clearCards(subreddit, json) {
	return {
		type: CLEAR_CARDS
	}
}


export const RECEIVE_SETS_START = 'RECEIVE_SETS_START'
export function setsFetchStart(subreddit, json) {
	return {
		type: RECEIVE_SETS_START
	}
}

export const RECEIVE_CARDS_START = 'RECEIVE_CARDS_START'
export function cardsFetchStart(subreddit, json) {
	return {
		type: RECEIVE_CARDS_START
	}
}

export const RECEIVE_CARD_TYPES = 'RECEIVE_CARD_TYPES'
export function receiveCardTypes(subreddit, json) {
	return {
		type: RECEIVE_CARD_TYPES,
		posts: json.types
	}
}

export const CARDS_FILTER_SWITCH = 'CARDS_FILTER_SWITCH'
export function cardsFilterSwitch(subreddit) {
	return {
		type: CARDS_FILTER_SWITCH,
		value: subreddit
	}
}




export function fetchSets(params) {
	return function(dispatch) {
		if (typeof params.page == "undefined") {
			params.page = '1';
		}
		if (typeof params.pageSize == "undefined") {
			params.pageSize = '9';
		}

		dispatch(setsFetchStart(params));

		return fetch(`https://api.pokemontcg.io/v1/sets/?pageSize=${params.pageSize}&page=${params.page}`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => { dispatch(receiveSets(params, json)) })
	}
}


export function fetchCards(params) {
	return function(dispatch) {

		dispatch(cardsFetchStart(params));

		let types = '';
		if (Array.isArray(params.types) && params.types.length > 0) {
			types = params.types.join('|').toLowerCase();
		}

		return fetch(`https://api.pokemontcg.io/v1/cards?setCode=${params.code}&pageSize=${params.pageSize}&page=${params.page}&types=${types}`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => {
				dispatch(receiveCards(params, json))
			})
	}
}

export function fetchCardTypes(params) {
	return function(dispatch) {
		return fetch(`https://api.pokemontcg.io/v1/types`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => {
				dispatch(receiveCardTypes(params, json))
			})
	}
}