import asyncHandler from 'express-async-handler'
import Ingredient from '../models/ingredientModel.js'

// @desc    유저 식재료 불러오기
// @route   GET /api/ingredients/:id
// @access  Public
const getIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({ user: req.params.id })
  res.json(ingredients)
})

// @desc    유저 식재료 등록
// @route   POST /api/ingredients
// @access  Public
const addIngredient = asyncHandler(async (req, res) => {
  const {
    user,
    name,
    image,
    category,
    memo,
    barcode,
    expirationDate,
  } = req.body

  const ingredient = new Ingredient({
    user,
    name,
    image,
    category,
    memo,
    barcode,
    expirationDate,
  })

  const createIngredient = await ingredient.save()

  res.status(201).json(createIngredient)
})

export { getIngredients, addIngredient }
