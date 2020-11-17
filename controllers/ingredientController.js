import asyncHandler from 'express-async-handler'
import Ingredient from '../models/ingredientModel.js'

// @desc    유저 식재료
// @route   GET /api/ingredients/:id
// @access  Public
const getIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({ user: req.params.id })
  res.json(ingredients)
})

// @desc    유저 식재료
// @route   POST /api/ingredients
// @access  Public
const addIngredient = asyncHandler(async (req, res) => {})

export { getIngredients }
