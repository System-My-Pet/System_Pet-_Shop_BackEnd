const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');
const express = require('express')
const routers = express.Router();

routers.post('/login',async(req,res)=>{
    const { login, senha }  = req.body

    const usuario = await funcionarioController.login(login, senha, res)

    res.json(usuario)
});



routers.post('/cadastroFuncionario',async(req,res)=>{
    const funcionario = await funcionarioController.create(req.body) 
    
    res.json(funcionario)
});

routers.post('/cadastroAtendimento', async(req,res) => {
    const atendimento = await atendimentoController.create(req.body)

    res.json(atendimento)
});

routers.get('/getAtendimentos',async(req,res)=>{
    const atendimentos = await atendimentoController.getAtendimentos()

    res.json(atendimentos)
});

module.exports = routers