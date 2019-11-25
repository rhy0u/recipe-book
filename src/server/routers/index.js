import express from 'express'
import recipes from 'server/routers/recipes'

const router = express.Router()

router.use('/api', recipes)

export default router
