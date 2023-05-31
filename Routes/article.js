const express = require('express')
const authenticate = require('../middlewares/auth')
const postdata = require('../controllers/postdata')

const allpost = require('../controllers/allpost')

const updatedata = require('../controllers/updatedata')

const articleroute = express.Router()



articleroute.post('/users/:id/articles',authenticate,postdata)

articleroute.get('/articles',authenticate , allpost)

articleroute.put('/users/:id',authenticate,updatedata)

module.exports = articleroute