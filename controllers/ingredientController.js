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
  const { user, name, price, image, barcode, expirationDate } = req.body

  const ingredient = new Ingredient({
    user,
    name,
    price,
    image,
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

// @desc    식재료 정보 수정
// @route   PUT /api/ingredients
// @access  Public
const updateIngredient = asyncHandler(async (req, res) => {
  const ingredient = await Ingredient.findById(req.body._id)

  if (ingredient) {
    ingredient.name = req.body.name || ingredient.name
    ingredient.price = req.body.price || ingredient.price
    ingredient.image = req.body.image || ingredient.image
    ingredient.barcode = req.body.barcode || ingredient.barcode
    ingredient.expirationDate =
      req.body.expirationDate || ingredient.expirationDate

    const updatedIngredient = await ingredient.save()

    res.json(updatedIngredient)
  } else {
    res.status(404)
    throw new Error('존재하지 않는 식재료입니다.')
  }
})

// @desc    바코드에 해당하는 식재료
// @route   GET /api/ingredients/barcode/:id
// @access  Public
const getIngredient = asyncHandler(async (req, res) => {
  const ingredient = await Ingredient.findOne({ barcode: req.params.id })

  res.json(ingredient)
})

export {
  getIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient,
  getIngredient,
}
