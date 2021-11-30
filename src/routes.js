const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');

const express = require('express')
const routers = express.Router();

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

routers.get('/getAtendimentosById',async(req,res)=> {
    const atendimento = await atendimentoController.getAtendimentosById(req.body);

    res.json(atendimento);
});

routers.get('/getAtendimentosByStatus',async(req,res)=> {
    const atendimento = await atendimentoController.getAtendimentosByStatus(req.body.status);

    res.json(atendimento);
});

routers.put('/Atendimento/update', async(req,res)=> {
    const atendimento = await atendimentoController.updateStatus(req.body);

    res.json(atendimento);
});

routers.put('/Atendimento/finalizarAtendimento', async(req,res)=> {
    const atendimento = await atendimentoController.finalizarAtendimento(req.body);

    res.json(atendimento);
});

module.exports = routers