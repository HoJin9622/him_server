import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getMyOrders,
  deleteOrder,
} from '../controllers/orderController.js'

router.route('/').post(addOrderItems)
router.route('/myorders/:id').get(getMyOrders)
router.route('/:id').delete(deleteOrder)

export default router
