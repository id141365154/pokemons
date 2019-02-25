import {
  REQUEST_POSTS
} from '../actions'

const sets = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
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
