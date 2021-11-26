const express = require('express')
//const routers = require('./controllers/exemplo-controller')
const routers = require('./routes');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require('cors')


require('dotenv').config({ path: '.env/.env' })

const MongoDB = require('./database/mongodb')

const server = express()

const PORT = 3000

server.use(express.json())

server.use(routers)

server.use(cors())

var corsOptions = {
    origin: 'http://127.0.0.1:' + PORT,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:"+ process.env.PORT]
      }
    },
    apis: ['./src/routes*.js']
  };
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



  server.get('/', (req,res)=>{
   
    return '<h1>Renan Monstro</h1>'
 })
 MongoDB.connect()

server.listen(PORT,()=>{
    
    console.log('server running')
})