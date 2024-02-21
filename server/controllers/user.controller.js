const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

// Route: /user/login
// METHOD: POST
// Description: compairs password and email to the database if match then create and issue token and procced

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('Incorrect Email or Password')
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('Incorrect Email or Password')
    }

    const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: '30 days',
    });

    res.json({ message: 'login success', user, token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Route: /user/signup
// METHOD: POST
// Description: encrypt incomming password and save all information to the database, then create and issue JWT

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, dob, gender ,phone } = req.body
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      dob,
      gender,
      phone,
      address,
    })

    const newUser = await user.save()

    const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: '30 days',
    })

    res.json({ message: 'signup success', user: newUser, token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Route: user logout
// METHOD: POST
// Description: invalidate the JWT token

router.post('/logout', async (req,res)=>{
  try {
    res.json({ message: 'Logout Successful'})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})

module.exports = router