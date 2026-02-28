const express = require('express')
const router = express.Router()

const {
  fetchComments,
  createComment,
  updateComment,
  deleteComment,
  toggleCommentLike
} = require('../controllers/comment.controllers.js')

router.get('/comments', fetchComments)

router.post('/comments', createComment)

router.patch('/comments/:id', updateComment)

router.delete('/comments/:id', deleteComment)

module.exports = router