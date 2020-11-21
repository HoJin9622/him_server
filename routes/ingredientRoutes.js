import express from 'express'
const router = express.Router()
import {
  getIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient,
} from '../controllers/ingredientController.js'

router.route('/').post(addIngredient).put(updateIngredient)
router.route('/:id').get(getIngredients).delete(deleteIngredient)

export default router
