import express from 'express'
const router = express.Router()
import { addOrderItems, getMyOrders } from '../controllers/orderController.js'

router.route('/').post(addOrderItems)
router.route('/myorders/:id').get(getMyOrders)

export default router
