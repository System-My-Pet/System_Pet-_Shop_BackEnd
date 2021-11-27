const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');
const express = require('express')
const routers = express.Router();
const cors = require('cors')

var corsOptions = {
    origin: 'http://127.0.0.1:' + PORT,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: body
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: object
 *     responses:
 *       200:
 *         
 */
 
routers.post('/login',cors(corsOptions),async(req,res)=>{
    const { login, senha }  = req.body

    const usuario = await funcionarioController.login(login, senha, res)

    res.json(usuario)
});



routers.post('/cadastroFuncionario',cors(corsOptions),async(req,res)=>{
    const funcionario = await funcionarioController.create(req.body) 
    
    res.json(funcionario)
});

routers.post('/cadastroAtendimento',cors(corsOptions), async(req,res) => {
    const atendimento = await atendimentoController.create(req.body)

    res.json(atendimento)
});

routers.get('/getAtendimentos',cors(corsOptions),async(req,res)=>{
    const atendimentos = await atendimentoController.getAtendimentos()

    res.json(atendimentos)
});

routers.get('/getAtendimentosById',cors(corsOptions),async(req,res)=> {
    const atendimento = await atendimentoController.getAtendimentosById(req.body);

    res.json(atendimento);
});

routers.put('/Atendimento/update',cors(corsOptions), async(req,res)=> {
    const atendimento = await atendimentoController.updateStatus(req.body);

    res.json(atendimento);
});

routers.put('/Atendimento/finalizarAtendimento',cors(corsOptions), async(req,res)=> {
    const atendimento = await atendimentoController.finalizarAtendimento(req.body);

    res.json(atendimento);
});

module.exports = routers