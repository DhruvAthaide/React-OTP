require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
const response = require('./src/utils/responses')
const port = process.env.APP_PORT
const mongoose = require('mongoose')

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.all('*',(req,res, next)=>{
    response(res, 404, 'Page Not Found')
})

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        server.listen(port,()=>{
            console.log('Connected to the Database')
            console.log(`Server is running on ${process.env.BASE_URI}\n`)
        })
    }).catch((error)=>{
        console.log(error.message)
    })