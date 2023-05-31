const express = require('express')
const login_route = express.Router()
const logindata = require('../controllers/login')


login_route.post('/login',logindata)


module.exports = login_route