const express = require('express')
const router = express.Router()

const {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  togglePostLike
} = require('../controllers/post.controllers.js')

router.get('/posts', fetchPosts)

router.post('/posts', createPost)

router.patch('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)

router.post('/posts/:id/like-toggle', togglePostLike)

module.exports = router