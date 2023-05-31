const signupData = require('../models/signupdb')
const {hashpass} = require('../middlewares/passwordhash')



 const signup = async (req,res) => {
    const {name,password,email,age} = req.body
//     console.log(password)
    if(name === undefined){
        res.send('Enter Valid Name')
    }
    if(password === undefined){
        res.send('Enter Valid Password')
    }
    if(email === undefined || ! email.endswith("@gmail.com")){
        res.send('Enter valid Email')
    }
    if(age === undefined){
        res.send('Enter valid Age')
    }
    const hashedpassword = await hashpass(password)
//     console.log(hashedpassword)
    
    const isemail = await  signupData.findOne({email:email})

    if(isemail){
        response.send('Email Already Exists ')
    }else{
        const newdata = new signupData({
                name:name,
                email:email,
                password:hashedpassword,
                age:age
        })
        await newdata.save()
        res.send('User Successfully Registered')
    }
    
    
    
}

module.exports = signup