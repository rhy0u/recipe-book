import express from 'express'

const router = express.Router()

router.get('/recipes', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'banane',
      description: 'tres simple',
      cookTime: 0,
      preparationTime: 0,
      steps: ['posez la banane'],
      ingredients: [{ name: 'banane', quantity: 1 }],
    },
  ])
})
