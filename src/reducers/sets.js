import {
	RECEIVE_SETS,
	RECEIVE_SETS_START
} from '../actions'

const sets = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_SETS:
			if (action.subreddit.page > 1) {
				let newState = { ...state }
				newState.posts = [...state.posts, ...action.posts]
				newState.page++;

				if (action.posts.length === 0) {
					newState.showMore = false;
				}
				newState.isFetching = false
				return newState;
			} else {
				return {
					posts: action.posts,
					pageSize: action.subreddit.pageSize,
					page: 1,
					showMore: true,
					isFetching: false
				}
			}
		case RECEIVE_SETS_START:
			let newState = { ...state }
			newState.isFetching = true
			return newState;
		default:
			return state
	}
}

export default sets