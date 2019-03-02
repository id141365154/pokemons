import {
  RECEIVE_CARDS,
  CLEAR_CARDS
} from '../actions'

const cards = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CARDS':
      return [
        ...state,
        action.posts
      ]
    case 'CLEAR_CARDS':
      return [];
    default:
      return state
  }
}
 
export default cards
