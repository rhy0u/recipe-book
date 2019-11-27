import React from 'react'
import { Box } from '@xstyled/styled-components'
import Recipe from 'client/components/Recipe'

const RecipeList = ({ recipes }) => {
  return (
    <Box row>
      {recipes.map(recipe => (
        <Box
          col={{ xs: 1, md: 1 / 3 }}
          key={recipe.id}
          display="flex"
          height={{ xs: 'fit-content', md: '100%' }}
        >
          <Recipe recipe={recipe} />
        </Box>
      ))}
    </Box>
  )
}

export default RecipeList
