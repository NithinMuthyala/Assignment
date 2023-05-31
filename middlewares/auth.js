const jwtToken = require('jsonwebtoken')

const authenticate = (req,res,next) => {
    // console.log(req.headers)
    const authorize = req.headers["authorization"]
    // console.log(authorize)
    const {id} = req.params
    if(authorize === undefined){
        res.send('Invalid Access')
    }
    try{
        const token = authorize.split(" ")[1]
        // console.log(token)
        const payload = jwtToken.verify(token,"nithin",)
        // req.id = payload
        next()
    }catch(err){
        console.log(err)
        res.status(401)
        res.send('Invalid Token')
    }
    

}

module.exports = authenticate