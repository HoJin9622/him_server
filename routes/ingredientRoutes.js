import express from 'express'
const router = express.Router()
import {
  getIngredients,
  addIngredient,
} from '../controllers/ingredientController.js'

router.route('/').post(addIngredient)
router.route('/:id').get(getIngredients)

export default router
