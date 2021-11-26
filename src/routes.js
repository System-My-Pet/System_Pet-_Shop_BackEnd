const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');
const express = require('express')
const routers = express.Router();


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: body
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: object
 *     responses:
 *       200:
 *         
 */
 
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

routers.get('/getAtendimentosById',async(req,res)=> {
    const atendimento = await atendimentoController.getAtendimentosById(req.body);

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