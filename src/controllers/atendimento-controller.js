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

    static async getAtendimentosById(id){
        try{
            const atendimento = await Atendimentos.findOne({_id: id})
            return atendimento;
        } catch(error){
            return { error: 'Falha ao buscar Atendimentos.' };
        }

    }

    static async getAtendimentosByStatus(prStatus){
        try{
            const atendimento = await Atendimentos.find({status: prStatus})
            return atendimento;
        } catch(error){
            return { error: 'Falha ao buscar Atendimentos.' };
        }

    }

    static async updateStatus(req){
        try{
            const update = {status: req.status};
            const atendimento = Atendimentos.findOneAndUpdate({_id:req._id}, update, {
                new: true
              });
              
            return atendimento;
        }catch(error){
            return { error: 'Falha ao atualizar Atendimento.' };
        }
    }
    
    static async update(req){
        try{
            const { _id, cpf, dataDeEntrada, dataDeSaida, email, especie, nomeDono,numero, status } = req;
            const data  = { cpf, dataDeEntrada, dataDeSaida, email, especie, nomeDono,numero, status };

            const atendimento = await Atendimentos.findByIdAndUpdate({_id},data,{new: true});

            return atendimento;
        }catch(error){
            return { error: 'Falha ao atualizar Atendimento.' };
        }
    }


    static async finalizarAtendimento(req){
        try{
            const update = {dataDeSaida:new Date()};
            const atendimento = Atendimentos.findOneAndUpdate({_id:req._id}, update, {
                new: true
              });
            return atendimento;
        }catch(error){
            return { error : `${error}` };
        }
    }


}
module.exports = AtendimentoController