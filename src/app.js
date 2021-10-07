const express = require('express')
const routers = require('./controllers/exemplo-controller')
//const testeController = require('./controllers/exemplo-controller')

require('dotenv').config({ path: '.env/.env' })

const MongoDB = require('./database/mongodb')

const server = express()

const PORT = 3000

server.use(express.json())

server.use(routers)

//  server.get('/', (req,res)=>{
   
//     return '<h1>Renan Monstro</h1>'
//  })
 MongoDB.connect()

server.listen(PORT,()=>{
    
    console.log('server running')
})