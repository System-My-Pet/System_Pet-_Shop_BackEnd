const Funcionarios = require('../models/funcionario')

class FuncionarioController{
    static async create(req){
        try {
            const funcionario = await Funcionarios.create(req);
            return funcionario;
        } catch (error) {
            return { error: 'Falha ao registrar Funcionário.' };
        } 
    }


}
module.exports = FuncionarioController