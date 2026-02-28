const Post = require('../models/users.models')
const User = require('../models/users.models')
const fetchPosts = async (req, res) => {
  try {
    const { author } = req.query
    const posts = await Post.find({ author }).populate('author','username fullName')

    posts.map(post => {
        post.profilePic = process.env.BASE_URL + post.profilePic
    })

    res.json({
      status: 'SUCCESS',
      data: posts
    })
  } catch(error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const createPost = async (req, res) => {
  try {
    const {author, content} = req.body

    const user = User.findById(author)
    if(!user) {
        return res.status(400).json({
            status: 'FAILED',
            message: 'Author not found'
        })
    }
    
      await Post.create({ 
        author,
        content,
     })
    res.json({
      status: 'SUCCESS',
      message: 'Post created successfully!'
    })
  } catch(error) {
    console.log(error)
    res.status(500).json({
      status: 'FAILED',
      error
    })
  }    
      
     })
     const updatedPost = async (req, res) => {
     try {
    const { id } = req.params
    const { content } = req.body
    await Post.findByIdAndUpdate(id, { content })
    res.json({
      status: 'SUCCESS',
      message: 'User created successfully!'
    })
  } catch(error) {
    console.log(error)
    res.status(500).json({
      status: 'FAILED',
      error
    })
  }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { fullName, bio} = req.body
    await User.findByIdAndUpdate(id, { name, email, age, isPrime })
    res.json({
      status: 'SUCCESS',
      message: 'User updated successfully!'
    })
  } catch(error) {
    res.status(500).json({
      status: 'FAILED',
      error
    })
  }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    await Customer.findByIdAndDelete(id)

const togglePostLike = async (req, res) => {
  try {
    const { id } = req.params
    const { userId } = req.body

    const post = await Post.findById(id)
    if(!post) {
        return res.status(400).json({
            status: 'FAILED',
            message: 'Post not found'
        })
    }

    const alreadyLiked = post.likes.some(like => like.toString() === userId)
    if(alreadyLiked) {
        post.likes = post.likes.filter(id => id.toString() !== userId)
    } else {
        post.likes.push(userId)
    }
    await  post.save()

    res.json({
      status: 'SUCCESS',
      message: 'Post successfully!'
    })
  } catch(error) {
    res.status(500).json({
      status: 'FAILED',
      error
    })
  }
}

module.exports = {
  fetchPosts,
  createPost,
  updatePost,
  deletePost
}