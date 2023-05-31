const signupData = require('../models/signupdb')
const jwt = require("jsonwebtoken");
const { unhashedpass} = require('../middlewares/passwordhash')

const logindata = async (req,res) => {
    const {email,password} = req.body 
   const isAvailable = await signupData.findOne({
            email:email
           
   })
   let jwtToken
//    console.log(isAvailable)
   if(isAvailable){
    const isPassword = await unhashedpass(password,isAvailable.password)
        // const ispassword = password === isAvailable.password
        // console.log(isPassword)
        if(isPassword){
            const payload = { email: email };
            jwtToken = jwt.sign(payload,'nithin',{ expiresIn: '1d' })
            res.send({jwtToken})
        }else{
            res.send('Invalid password')
        }
    
   }else{
    res.send("User Doesn't Exist")
    
   }
   
}

module.exports = logindata