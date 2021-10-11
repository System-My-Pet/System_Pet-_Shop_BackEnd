const mongoose = require('mongoose');
const { Schema } = mongoose;

const FuncionarioSchema = new Schema({
    email: {
       type: String,
       required: true 
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    dataCriação: {
        type:  Date,
        default: Date.now
    },
    dataAtualizacao: {
        type: Date
    },

});

const Funcionario = mongoose.model('Funcionarios', FuncionarioSchema);

module.exports = Funcionario;