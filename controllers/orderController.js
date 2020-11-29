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
  const orders = await Order.find()
    .or([{ buyer: req.params.id }, { seller: req.params.id }])
    .populate('buyer seller orderIngredient')
  res.json(orders)
})

// @desc    주문 취소
// @route   DELETE /api/orders/:id
// @access  Public
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    await order.remove()
    res.json({ message: '주문이 성공적으로 취소되었습니다.' })
  } else {
    res.status(404)
    throw new Error('올바르지 않은 주문번호입니다.')
  }
})

export { addOrderItems, getMyOrders, deleteOrder }
