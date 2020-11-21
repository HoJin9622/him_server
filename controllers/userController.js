import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    유저 로그인
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { id, password } = req.body

  const user = await User.findOne({ id })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      id: user.id,
      isProvider: user.isProvider,
    })
  } else {
    res.status(401)
    throw new Error('올바르지 않은 아이디 혹은 패스워드 입니다.')
  }
})

// @desc    유저 회원가입
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, id, password, isProvider } = req.body

  const userExists = await User.findOne({ id })

  if (userExists) {
    res.status(400)
    throw new Error('중복되는 아이디입니다.')
  }

  const user = await User.create({
    name,
    id,
    password,
    isProvider,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      id: user.id,
      isProvider: user.isProvider,
    })
  } else {
    res.status(400)
    throw new Error('올바르지 않은 양식입니다.')
  }
})

// @desc    유저 패스워드 변경
// @route   PUT /api/users/profile
// @access  Public
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body._id)

  if (user) {
    user.name = req.body.name || user.name
    user.id = req.body.id || user.id
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      id: updatedUser.id,
      name: updatedUser.name,
      isProvider: updatedUser.isProvider,
    })
  } else {
    res.status(404)
    throw new Error('존재하지 않는 유저입니다.')
  }
})

// @desc    유저 회원탈퇴
// @route   DELETE /api/users/:id
// @access  Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: '정상적으로 탈퇴되었습니다.' })
  } else {
    res.status(404)
    throw new Error('존재하지 않는 유저입니다.')
  }
})

export { registerUser, authUser, updateUserProfile, deleteUser }
