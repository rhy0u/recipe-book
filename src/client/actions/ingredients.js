import axios from 'axios'

export const GET_INGREDIENTS = 'GET_INGREDIENTS'

export const getIngredients = () => async dispatch => {
  const res = await axios.get('/api/ingredients')
  dispatch({
    type: GET_INGREDIENTS,
    payload: res.data,
  })
}
