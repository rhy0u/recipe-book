import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import RecipeList from 'client/components/RecipeList'
import { getRecipes } from 'client/actions/recipes'

const Home = ({ recipes, getRecipes }) => {
  useEffect(() => {
    getRecipes()
  }, [getRecipes])
  return <RecipeList recipes={recipes} />
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
}

const mapDispatchToProps = {
  getRecipes,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
