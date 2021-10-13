const mongoose = require('mongoose');
const { Schema } = mongoose;

const TesteSchema = new Schema({
    testeid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Teste = mongoose.model('Teste', TesteSchema);

module.exports = Teste;