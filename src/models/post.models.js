const mongoose = require('mongoose')
const User = require('./User.models')

- author (ObjectId ref -> User)
    - content (String)
    - likes (Array of ObjectId ref -> User)
    - timestamps (Date)

const postSchema = mongoose.Schema({
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

const Post = mongoose.model('Post', postSchema)

module.exports = User
