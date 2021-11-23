const mongoose = require('mongoose');
const { Schema } = mongoose;

const AtendimentoSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    nomeDono: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    email: {
       type: String,
       required: true 
    },
    cpf: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    dataDeEntrada: {
        type:  Date,
        default: Date.now
    },
    dataDeSaida: {
        type: Date,
        default: new Date()
    },

});

const Atendimento = mongoose.model('Atendimentos', AtendimentoSchema);

module.exports = Atendimento;