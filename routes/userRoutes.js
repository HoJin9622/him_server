import express from 'express'
const router = express.Router()
import {
  registerUser,
  authUser,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').put(updateUserProfile)
router.route('/:id').delete(deleteUser)

export default router
