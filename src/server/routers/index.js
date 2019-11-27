import express from 'express'
import recipes from 'server/routers/recipes'
import ingredients from 'server/routers/ingredients'

const router = express.Router()

router.use('/api', recipes)
router.use('/api', ingredients)

export default router
