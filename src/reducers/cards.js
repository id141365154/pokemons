import {
	RECEIVE_CARDS,
	CLEAR_CARDS,
	RECEIVE_CARDS_START,
	RECEIVE_CARD_TYPES,
	CARDS_FILTER_SWITCH
} from '../actions'

const cards = (state = [], action) => {
	switch (action.type) {
		case CLEAR_CARDS:
			{
				let newState = { ...state }
				newState.posts = [];
				newState.isFetched = false;
				newState.isFetching = false

				return newState;
			}
		case RECEIVE_CARDS:
			{
				if (action.subreddit.page > 1) {
					let newState = { ...state }
					newState.posts = [...state.posts, ...action.posts]
					newState.page = action.subreddit.page;

					if (action.posts.length === 0) {
						newState.showMore = false;
					}
					newState.isFetched = true;
					newState.isFetching = false;

					return newState;
				} else {
					let newState = { ...state }
					newState.posts = action.posts;
					newState.pageSize = action.subreddit.pageSize;
					newState.page = 1;
					newState.showMore = true;
					newState.isFetched = true;
					newState.isFetching = false;

					return newState
				}
			}
		case RECEIVE_CARDS_START:
			{
				if (!state.isFetching) {
					let newState = { ...state }
					newState.isFetching = true;
					return newState;
				} else {
					return state;
				}
			}
		case RECEIVE_CARD_TYPES:
			{
				let newState = { ...state }
				newState.filter = {
					list: action.posts,
					active: []
				};

				return newState;
			}
		case CARDS_FILTER_SWITCH:
			{
				let newState = { ...state }

				let isHas = false;
				newState.filter.active = newState.filter.active.filter((val, key) => {
					if (val != action.value) {
						return true;
					} else {
						isHas = true;
					}
				});

				if (!isHas) {
					newState.filter.active.push(action.value);
				}

				return newState;
			}
		default:
			{ return state }
	}
}

export default cards