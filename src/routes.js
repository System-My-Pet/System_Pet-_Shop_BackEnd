const funcionarioController = require('./controllers/funcionario-controller');
const atendimentoController = require('./controllers/atendimento-controller');
const express = require('express')
const routers = express.Router();
const cors = require('cors')
const checkToken = require('./config/checktoken')

var corsOptions =
{
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

routers.use((req,res,next) => {
    res.header("Acess-Control-Allow-origin", "*");
    routers.use(cors());
    next();
})

routers.get('/status', (req, res) => {

    res.json({ status: "TEST" })
})


routers.get('/getAtendimentos', cors(corsOptions), async (req, res) => {
    const atendimentos = await atendimentoController.getAtendimentos()

    res.json(atendimentos)
});


routers.get('/protegida', cors(corsOptions), (req, res) => {

    res.json({ id: req.id })
})



routers.post('/cadastroFuncionario', cors(corsOptions), async (req, res) => {
    const { nome, email, senha } = req.body

    const funcionario = await funcionarioController.create(nome, email, senha)

    res.json(funcionario)
});

routers.post('/cadastroAtendimento', cors(corsOptions), async (req, res) => {
    const atendimento = await atendimentoController.create(req.body)

    res.json(atendimento)
});


routers.get('/getAtendimentosById/:id', cors(corsOptions), async (req, res) => {

    const atendimento = await atendimentoController.getAtendimentosById(req.params.id);

    res.json(atendimento);
});

routers.get('/getAtendimentosByStatus',cors(corsOptions), async (req, res) => {
    const atendimento = await atendimentoController.getAtendimentosByStatus(req.body.status);

    res.json(atendimento);
});

routers.put('/update', cors(corsOptions), async (req, res) => {
    const atendimento = await atendimentoController.update(req.body);

    res.json(atendimento);
});

routers.put('/Atendimento/updateStatus', cors(corsOptions), async (req, res) => {
    const atendimento = await atendimentoController.updateStatus(req.body);

    res.json(atendimento);
});

routers.put('/Atendimento/finalizarAtendimento', cors(corsOptions), async (req, res) => {
    const atendimento = await atendimentoController.finalizarAtendimento(req.body);

    res.json(atendimento);
});

//routers.use(checkToken)

routers.post('/login', cors(corsOptions), async (req, res) => {

    const token = req.headers
    const { login, senha } = req.body

    const usuario = await funcionarioController.login(login, senha, res)

    res.json(usuario)
});

module.exports = routers