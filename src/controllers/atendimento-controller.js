const Atendimentos = require('../models/Atendimento')

class AtendimentoController{
    static async create(req){
        try {
            const atendimento = await Atendimentos.create(req);
            return atendimento;
        } catch (error) {
            return { error: 'Falha ao registrar Atendimento.' };
        } 
    }

    static async getAtendimentos(){
        try {
            const atendimento = await Atendimentos.find({})
            return atendimento;
        } catch (error) {
            return { error: 'Falha ao buscar Atendimentos.' };
        }
    }


}
module.exports = AtendimentoController