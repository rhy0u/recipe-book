import express from 'express'
import asyncHandler from 'server/middlewares/asyncHandler'
import Recipe from 'server/models/Recipe'

const router = express.Router()

router.get(
  '/recipes',
  asyncHandler(async (req, res) => {
    const recipes = await Recipe.query().eager('ingredients')
    res.json(recipes)
  }),
)

router.post(
  '/recipes/add',
  asyncHandler(async (req, res) => {
    const { recipe } = req.body
    const added = await Recipe.query()
      .insertGraphAndFetch(recipe, { relate: true })
      .eager('ingredients')
    res.json(added)
  }),
)

router.post(
  '/recipes/delete',
  asyncHandler(async (req, res) => {
    const { recipeId } = req.body
    await Recipe.query().deleteById(recipeId)
    res.send(true)
  }),
)

export default router
