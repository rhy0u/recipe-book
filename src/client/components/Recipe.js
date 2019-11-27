import React from 'react'
import styled from '@xstyled/styled-components'
import { connect } from 'react-redux'
import Button from 'client/components/Button'

import { deleteRecipe } from 'client/actions/recipes'

const RecipeWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #aaa;
  background-color: #f7f8fb;
  display: flex;
  width: 300rpx;
  flex-direction: column;
  justify-content: space-between;
  padding: 16rpx;
  margin: 10rpx;
`
const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
`

const RecipeSection = styled.span`
  font-size: 16rpx;
  font-weight: bold;
  padding-top: 16px;
  padding-bottom: 8px;
`

const List = styled.ul`
  list-style-type: circle;
  > li {
    padding: 5px 0;
  }
`

const IngredientsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Recipe = ({ recipe, deleteRecipe }) => {
  return (
    <RecipeWrapper>
      <RecipeContent>
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <span>Temps de preparation: {recipe.preparationTime} min</span>
        <span>Temps de cuisson: {recipe.cookTime} minutes</span>
        <RecipeSection>Ingredients</RecipeSection>
        {recipe.ingredients.map(ingredient => (
          <IngredientsWrapper key={`${recipe.id}-ingredient${ingredient.id}`}>
            <span>{ingredient.name}</span>
            <span>
              {ingredient.quantity}
              {ingredient.unit}
            </span>
          </IngredientsWrapper>
        ))}
        <RecipeSection>Etapes</RecipeSection>
        <List>
          {recipe.steps.map((step, key) => (
            /* eslint-disable react/no-array-index-key */
            <li key={`${recipe.id}-step${key}`}>{step}</li>
          ))}
        </List>
      </RecipeContent>
      <Button onClick={() => deleteRecipe(recipe.id)} color="secondary">
        Supprimer cette recette
      </Button>
    </RecipeWrapper>
  )
}

const mapDispatchToProps = {
  deleteRecipe,
}

export default connect(null, mapDispatchToProps)(Recipe)
