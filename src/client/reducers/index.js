// importamos combine reducer que va uniendo los reducer segun amos agregando mas
import { combineReducers } from 'redux'
import recipes from './recipes'
import ingredients from './ingredients'

export default combineReducers({
  recipes,
  ingredients,
})
