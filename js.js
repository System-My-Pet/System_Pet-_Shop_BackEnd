const jwt = require('jsonwebtoken')

let token = null

token = jwt.sign({ id: "10000" }, '1234', {
    expiresIn: 300 // expires in 5min
});

console.log(token)