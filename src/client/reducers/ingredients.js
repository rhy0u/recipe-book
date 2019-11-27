import { GET_INGREDIENTS } from '../actions/ingredients'

const initialState = {
  ingredients: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.payload

    default:
      return state
  }
}
