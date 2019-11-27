import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getIngredients } from 'client/actions/ingredients'
import { addRecipe } from 'client/actions/recipes'
import RecipeForm from 'client/components/RecipeForm'
import * as routePaths from 'client/utils/routePaths'
import { useHistory } from 'react-router-dom'

const AddRecipe = ({ ingredients, getIngredients, addRecipe }) => {
  const history = useHistory()

  useEffect(() => {
    getIngredients()
  }, [getIngredients])
  return (
    <RecipeForm
      onSubmit={values => {
        addRecipe(values)
        history.push(routePaths.home())
      }}
      ingredients={ingredients}
    />
  )
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
}

const mapDispatchToProps = {
  getIngredients,
  addRecipe,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
