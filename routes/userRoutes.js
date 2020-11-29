import express from 'express'
const router = express.Router()
import {
  registerUser,
  authUser,
  updateUserProfile,
  deleteUser,
  getProvider,
  isProvider,
} from '../controllers/userController.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').put(updateUserProfile)
router.route('/:id').delete(deleteUser)
router.route('/provider').get(getProvider)
router.route('/isProvider/:id').get(isProvider)

export default router
