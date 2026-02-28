const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const userRoutes = require('./src/routes/user.routes')
const postRoutes = require('./src/routes/post.routes')
const commentRoutes = require('./src/routes/comment.routes')  

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use('/uploads.static('uploads'))

app.use('', userRoutes)
app.use('', postRoutes)
app.use('', commentRoutes)

app.get('/', (req, res) => {
  res.json ({
    message: 'Welcome to Social Media App API',
    now: new Date()
  })
})
  

mongoose.connect(process.env.MONGODB_URL) 
  .then(() => {
    console.log('MongoDB connected successfully ✅')
    app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT} ✅`)
    })  
  })
    .catch((error) => {
      console.log('MongoDB connection failed ❌', error)
      throw error
})





/*
  # Social Media App
  - Model
    - User
      - username (String)
      - email (String)
      - fullName (String)
      - bio (String)
      - profileImg (String)
      - timestamps (createdAt, updatedAt)
    - Post
      - author (ObjectId ref -> User)
      - content (String)
      - postImg (String)
      - likes (Array of ObjectId ref -> User)
      - timestamps (Date)
    - Comment
      - post (ObjectId ref -> Post)
      - author (ObjectId ref -> User)
      - content (String)
      - timestamps (Date)

  - Routes:
    - User
      - Get /users (READ)
      - Post /users (CREATE)
      - PATCH /users (UPDATE)
      - DELETE /users (DELETE)
      - Get /users/:id (READ)
    - Post
      - Get /posts (READ)
      - Post /posts (CREATE)
      - PATCH /posts (UPDATE)
      - DELETE /posts (DELETE)
      - GET /posts/:id (READ)
      - POST /posts/:id/like-toggle (CREATE)
    - Comment
      - Get /comments?postId= (GET)
      - Post /comments (CREATE)
      - PATCH /comments/:id (UPDATE)
      - DELETE /comments/:id (DELETE)
*/