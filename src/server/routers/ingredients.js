import express from 'express'
import asyncHandler from 'server/middlewares/asyncHandler'
import Ingredient from 'server/models/Ingredient'

const router = express.Router()

router.get(
  '/ingredients',
  asyncHandler(async (req, res) => {
    const ingredients = await Ingredient.query()
    res.json(ingredients)
  }),
)

export default router
