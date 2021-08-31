const express = require('express')


const server = express()

const PORT = 3000

server.use(express.json())

//  server.get('/', (req,res)=>{
   
//     return '<h1>Renan Monstro</h1>'
//  })

server.listen(PORT,()=>{
    console.log('server running')
})