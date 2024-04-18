const express = require('express')
const authRouter = express.Router()
const ctrl = require('./auth-controllers')

authRouter.post('/register/,ctrl.Register')