import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE } from '../actions/recipes'

const initialState = {
  recipes: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload
    case ADD_RECIPE:
      return [...state, action.payload]
    case DELETE_RECIPE:
      return state.filter(recipe => recipe.id !== action.payload)

    default:
      return state
  }
}
