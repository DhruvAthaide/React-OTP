const User = require('../models/user');

const Register = async({username,email,password})=> {
    try{
        const newUser = await User.create({
            username, email, password
        })

        return newUser
    }catch(error){
        throw error
    }
}

module.exports = { Register }