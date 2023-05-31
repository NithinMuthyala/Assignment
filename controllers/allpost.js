const articles = require('../models/articlesdb')

const allpost = async (req,res) => {
        
    const data =  await articles.find()
    if(data === undefined){
        res.send('No Data Available')
    }else{
        res.send(data)
    }
    
}

module.exports =  allpost