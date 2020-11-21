import express from 'express'
const router = express.Router()
import {
  getIngredients,
  addIngredient,
  deleteIngredient,
} from '../controllers/ingredientController.js'

router.route('/').post(addIngredient)
router.route('/:id').get(getIngredients).delete(deleteIngredient)

export default router
