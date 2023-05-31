const bcrypt = require('bcrypt')

const hashpass = async (password) => {
    return await bcrypt.hash(password, 10)
}

const unhashedpass = async (pass,hash) => {
   return  await bcrypt.compare(pass,hash)
}

module.exports = {hashpass , unhashedpass}