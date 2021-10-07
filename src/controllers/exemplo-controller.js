const Teste = require('../models/exemplo-model')
const express = require('express')
const router = express.Router();

//router.use(authMiddleware);

router.post('/teste', async(req, res) => {
    try{
        const teste = await Teste.create(req.body);

        return res.send(teste);
    }catch(err){
        return res.status(400).send({ error: 'Failed to register teste' });
    }
});
module.exports = router;

