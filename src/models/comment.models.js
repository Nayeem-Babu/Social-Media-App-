const mongoose = require('mongoose')
const User = require('./User.models')
const Post = require('./post.models')

- author (ObjectId ref -> User)
    - content (String)
    - likes (Array of ObjectId ref -> User)
    - timestamps (Date)

const commentSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Post,
    required: true
  }
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
    required: true
  },
    content: {
    type: String,
    required: true,
    minLength: 50
  },
  likes: {
    type: String,
    required: true,
    minLength: 50
  },
  likes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }] 
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = User
