const Customer = require('../models/users.models')

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find()

    users.map(user => {
        user.profilePic = process.env.BASE_URL + user.profilePic
    })

    res.json({
      status: 'SUCCESS',
      data: users
    })
  } catch(error) {
    res.status(500).json({
      status: 'FAILED',
      message: 'Something went wrong'
    })
  }
}

const createUser = async (req, res) => {
  try {
    const { username, email, fullName, bio } = req.body
    
    console.log({username, email, fullName, bio})
    console.log('File info:', req.file)

    profilePic: /uploads/${file.filename}

      await User.create({ 
      username, 
      email,  
      fullName,
      bio,
      
     })
    const { id } = req.params
    const { fullName, bio } = req.body
    await User.findByIdAndUpdate(id, { fullName, bio })
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

const updateUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await Customer.findByIdAndDelete(id)
    res.json({
      status: 'SUCCESS',
      message: 'Customer deleted successfully!'
    })
  } catch(error) {
    res.status(500).json({
      status: 'FAILED',
      error
    })
  }
}

module.exports = {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser
}