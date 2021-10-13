const Teste = require('../models/exemplo-model')
const Funcionarios = require('../models/funcionario')
const Atendimentoss = require('../models/Atendimento')
const express = require('express')
const router = express.Router();

//router.use(authMiddleware);

router.post('/teste', async(req, res) => {
    try{
        const teste = await Atendimentoss.create(req.body);

        return res.send(teste);
    }catch(err){
        return res.status(400).send({ error: 'Failed to register teste' });
    }
});

router.get('/teste', async(req,res) => {
    const teste = await Teste.get();
    console.log(teste);
})
module.exports = router;

