const express = require('express')
const router = express.Router()
const upload = require('../middlewares/upload')

const {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user.controllers')

router.get('/users', fetchUsers)

router.post('/users', upload.single('profilePic'), createUser)

router.post('/products', createProduct)

router.patch('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router