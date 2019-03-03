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


export function fetchSets(params) {
	return function(dispatch) {
		if (typeof params.page == "undefined") {
			params.page = '1';
		}
		if (typeof params.pageSize == "undefined") {
			params.pageSize = '9';
		}
		return fetch(`https://api.pokemontcg.io/v1/sets/?pageSize=${params.pageSize}&page=${params.page}`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveSets(params, json))
			)
	}
}


export function fetchCards(params) {
	return function(dispatch) {
		return fetch(`https://api.pokemontcg.io/v1/cards?setCode=${params.code}&pageSize=${params.pageSize}&page=${params.page}`)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => {
				dispatch(receiveCards(params, json))
			})
	}
}