import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    주문 등록
// @route   POST /api/orders
// @access  Public
const addOrderItems = asyncHandler(async (req, res) => {
  const { buyer, seller, orderIngredient } = req.body

  const order = new Order({
    buyer,
    seller,
    orderIngredient,
  })

  const createOrder = await order.save()

  res.status(201).json(createOrder)
})

// @desc    내 주문 목록
// @route   GET /api/orders/myorders/:id
// @access  Public
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ buyer: req.params.id }).populate(
    'buyer seller orderIngredient'
  )
  res.json(orders)
})

export { addOrderItems, getMyOrders }
