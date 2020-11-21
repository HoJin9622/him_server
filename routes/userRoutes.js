import express from 'express'
const router = express.Router()
import {
  registerUser,
  authUser,
  updateUserProfile,
} from '../controllers/userController.js'

router.route('/').post(registerUser)
// .get(getUsers)
router.post('/login', authUser)
router.route('/profile').put(updateUserProfile)
// router
//   .route('/profile')
//   .get(protect, getUserProfile)
// router
//   .route('/:id')
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser)

export default router
