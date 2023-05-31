const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routes/Singup')
const login_route = require('./Routes/login')
const articleroute  = require('./Routes/article')
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://muthyal1996:Nithin123@nithin.you9vdw.mongodb.net/?retryWrites=true&w=majority').then(
    () => {
        console.log('Db Connected')
    }
).catch((err) => {
    console.log(err)
})

app.listen(4050, () => {
    console.log('Server is Running at  4050')
})
app.use('/api',router)
app.use('/api',login_route)
app.use('/api',articleroute)


