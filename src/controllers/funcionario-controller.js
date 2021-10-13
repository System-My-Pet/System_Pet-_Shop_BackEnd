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

    static async login(login, senha, res){
        const usuario =  await Funcionarios.findOne({login, senha},{_id: 0})
 
        if(!usuario){
             return  {message: 'Usuário não existe!'}
        }
          
        return usuario
    }


}
module.exports = FuncionarioController