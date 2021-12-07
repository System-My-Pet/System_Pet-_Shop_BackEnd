const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');
const express = require('express')
const routers = express.Router();
const cors = require('cors')
const checkToken = require('./config/checktoken')

var corsOptions = {
    origin: 'http://127.0.0.1:' + 3002,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


 routers.use(checkToken)

routers.get('/protegida', cors(corsOptions),[checkToken], (req, res)=>{

    res.json({id: req.id}) 
})


routers.post('/login',cors(corsOptions),async(req,res)=>{

    const token = req.headers
    const { login, senha }  = req.body

    const usuario = await funcionarioController.login(login, senha, res)

    res.json(usuario)
});


routers.post('/cadastroFuncionario',cors(corsOptions),async(req,res)=>{
    const { nome, email , senha }  = req.body

    const funcionario = await funcionarioController.create(nome,email, senha) 
    
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

routers.get('/getAtendimentosByStatus',async(req,res)=> {
    const atendimento = await atendimentoController.getAtendimentosByStatus(req.body.status);

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