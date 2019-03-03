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
			if (action.subreddit.page > 1) {
				let newState = { ...state }
				newState.posts = [...state.posts, ...action.posts]
				newState.page++;

				if (action.posts.length == 0) {
					newState.showMore = false;
				}
				newState.isFetched = true;
				return newState;
			} else {
				return {
					posts: action.posts,
					pageSize: action.subreddit.pageSize,
					page: 1,
					showMore: true,
					isFetched: true
				}
			}

		default:
			return state
	}
}

export default cards