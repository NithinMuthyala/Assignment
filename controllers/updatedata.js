const signupData = require('../models/signupdb')


const updatedata = async (req,res) => {
    const {name,age} = req.body 
    const {id} = req.params
    const isdataavailable = await signupData.findOne({_id:id})
    // console.log(isdataavailable)
    if(isdataavailable){
       await  signupData.updateOne({_id:id},{$set:{name:name,age:age}})
    //    const datafind =await signupData.findOne({_id:id})
    //    console.log(datafind)
        res.send('Response Updated Success')
    }else{
        res.send('Invalid User')
    }

}

module.exports = updatedata