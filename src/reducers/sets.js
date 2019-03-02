import {
  RECEIVE_SETS
} from '../actions'

const sets = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_SETS':
      return [
        ...state,
        action.posts
      ]
   /* case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )*/
    default:
      return state
  }
}

export default sets
