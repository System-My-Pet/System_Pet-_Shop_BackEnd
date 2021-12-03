const Funcionarios = require('../models/funcionario')
const bcrypt = require('bcrypt');




class FuncionarioController {



    static async create(req) {
        try {

            bcrypt.hash(req.senha, 10).then(async function (hash) {
                req.senha = hash
                const funcionario = await Funcionarios.create(req);
            });

            return funcionario;
        } catch (error) {
            return { error: 'Falha ao registrar Funcionário.' };
        }
    }

    static async login(login, senhaDigitada, res) {
        const { senha: senhaHash } = await Funcionarios.findOne({ login }, { _id: 0 })

        if (!senhaHash) {
            return { message: 'Usuário não existe!' }
        }

        const result = await bcrypt.compare(senhaDigitada, senhaHash);

        return result ? { message: 'logado' } : { message: 'error login' }

    }

}

module.exports = FuncionarioController