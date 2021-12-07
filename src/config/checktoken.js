const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '.env/.env' })

const checkToken = async function (req, res, next){

    const token = req.headers["authorization"]

    if(!token){
        return res.status(401).json({ error: 'sem token' })
    }

    const [,token2] = token.split(" ")

    const decoded =  jwt.verify(token2, process.env.SECRET,function(error, decoded){

        if(error){
            return res.status(401).json({ error: 'error token' })
        }

       req.id = decoded.id
       return next()

    });

}

module.exports = checkToken