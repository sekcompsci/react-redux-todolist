import { ADD_TODO, REMOVE_TODO } from '../../actions/todos';

let initState = [
  {
    id: 0,
    text: 'Use Redux'
  }
]

export default function todos(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text }]
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
}