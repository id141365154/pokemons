import {
	RECEIVE_CARDS,
	CLEAR_CARDS,
} from '../actions'

const cards = (state = [], action) => {
	switch (action.type) {
		case 'CLEAR_CARDS':
			return {
				posts: [],
				isFetched: false
			}
		case 'RECEIVE_CARDS':
			return {
				posts: action.posts,
				isFetched: true
			}

		default:
			return state
	}
}

export default cards