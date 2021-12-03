const Funcionarios = require('../models/funcionario')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



class FuncionarioController {


     static async generateHash(senha) {
        return bcrypt.hash(senha, 10)
    }

    static async create(nome, email, senha) {

        try {

           const hash = await FuncionarioController.generateHash(senha)

           const  {nome:nomeBd, email:emailBd} =  await  Funcionarios.create({ nome, email, senha: hash });
            
           return {nome: nomeBd, email:emailBd} 
              

        } catch (error) {
            return { error: 'Falha ao registrar Funcionário.' };
        }
    }

    static async login(login, senhaDigitada, res) {
        const { senha: senhaHash } = await Funcionarios.findOne({ email: login }, { _id: 0 })

        if (!senhaHash) {
            return { message: 'Usuário não existe!' }
        }

        const result = await bcrypt.compare(senhaDigitada, senhaHash);

        let token = null

        if (result) {
            jwt.sign({
                data: 'foobar'
            }, 'secret', { expiresIn: 60 * 60 }).then((generateToken) => {
                token = generateToken
            })
        }

        return token

    }

}

module.exports = FuncionarioController