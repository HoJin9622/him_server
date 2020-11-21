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
    price,
    image,
    category,
    memo,
    barcode,
    expirationDate,
  } = req.body

  const ingredient = new Ingredient({
    user,
    name,
    price,
    image,
    category,
    memo,
    barcode,
    expirationDate,
  })

  const createIngredient = await ingredient.save()

  res.status(201).json(createIngredient)
})

// @desc    식재료 삭제
// @route   DELETE /api/ingredients/:id
// @access  Public
const deleteIngredient = asyncHandler(async (req, res) => {
  const ingredient = await Ingredient.findById(req.params.id)

  if (ingredient) {
    await ingredient.remove()
    res.json({ message: '정상적으로 삭제되었습니다.' })
  } else {
    res.status(404)
    throw new Error('존재하지 않는 식재료입니다.')
  }
})

export { getIngredients, addIngredient, deleteIngredient }
