const articles = require('../models/articlesdb')
const signupData = require('../models/signupdb')

const postdata = async (req,res) => {
    const {title,description} = req.body
    const {id} = req.params
    const isIdValid = await signupData.findOne({
        _id:id
       
})
    if(isIdValid){
        console.log(id)
        const data = new articles({
            title:title,
            description:description,
            postedby:id
        })
        await data.save()
        res.send('Posted SuccessFully')
    }else{
        console.log('Not a Valid User')
        res.send('invalid')
    }
    

}

module.exports = postdata