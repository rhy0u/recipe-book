import axios from 'axios'

export const GET_RECIPES = 'GET_RECIPES'
export const ADD_RECIPE = 'ADD_RECIPE'
export const DELETE_RECIPE = 'DELETE_RECIPE'

export const getRecipes = () => async dispatch => {
  const res = await axios.get('/api/recipes')
  dispatch({
    type: GET_RECIPES,
    payload: res.data,
  })
}
export const addRecipe = values => async dispatch => {
  const res = await axios.post('/api/recipes/add', { ...values })
  dispatch({
    type: ADD_RECIPE,
    payload: res.data,
  })
}

export const deleteRecipe = recipeId => async dispatch => {
  await axios.post('/api/recipes/delete', { recipeId })
  dispatch({
    type: DELETE_RECIPE,
    payload: recipeId,
  })
}
