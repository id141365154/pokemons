import {
	RECEIVE_CARDS,
	CLEAR_CARDS,
	RECEIVE_CARDS_START
} from '../actions'

const cards = (state = [], action) => {
	switch (action.type) {
		case CLEAR_CARDS:
			return {
				posts: [],
				isFetched: false,
				isFetching: false
			}
		case RECEIVE_CARDS:
			if (action.subreddit.page > 1) {
				let newState = { ...state }
				newState.posts = [...state.posts, ...action.posts]
				newState.page++;

				if (action.posts.length === 0) {
					newState.showMore = false;
				}
				newState.isFetched = true;
				newState.isFetching = false;
				return newState;
			} else {
				return {
					posts: action.posts,
					pageSize: action.subreddit.pageSize,
					page: 1,
					showMore: true,
					isFetched: true,
					isFetching: false
				}
			}
		case RECEIVE_CARDS_START:
			if (!state.isFetching) {
				let newState = { ...state }
				newState.isFetching = true;
				return newState;
			} else {
				return state;
			}
		default:
			return state
	}
}

export default cards