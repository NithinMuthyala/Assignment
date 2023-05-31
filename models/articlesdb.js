const mongoose = require('mongoose')

const articles = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postedby:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('articles',articles)