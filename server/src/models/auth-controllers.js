const service = require('./auth-service')
const response = require('../utils/responses')
const User = require('../models/user');

const Register = async(req, res) => {
    try{
        const { username, email, password} = req.body;

        if(!username){
            return response (res, 400, {message: `Username can't be empty!`})
        }else if(!email || !password){
            return response(res, 400, {message: `Email or Password can't be empty!`})
        }

        const queries = {
            username: username,
            email: email,
            password: password,
        };

        const newUser = new User(queries);

        const savedUser = await newUser.save();

        if(!savedUser){
            return response(res, 500, {message: `There was a problem registering the user!`});
        }

        return response(res, 200,{message: `User registered Successfully!`,user:savedUser});
    }catch(error){
        return response(res, 500, {message: error.message});
    }
}

module.exports = { Register }