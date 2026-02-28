const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  bio:{
    type: String,
    minLength: 15,
    required: true,
  },
  profilePic: {
    type: String,
  }, {
    timestamps: true
})

const Customer = mongoose.model('User', userSchema)

module.exports = User
