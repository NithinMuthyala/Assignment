const express = require('express')
// const signupData = require('../models/signupdb')
const signup = require('../controllers/signup')
// const hashpass = require('../middlewares/passwordhash')
const router = express.Router()


router.post('/signup',signup)

module.exports = router