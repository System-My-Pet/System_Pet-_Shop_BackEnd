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
        const { senha: senhaHash, _id } = await Funcionarios.findOne({ email: login },)

        if (!senhaHash) {
            return { message: 'Usuário não existe!' }
        }

        const result = await bcrypt.compare(senhaDigitada, senhaHash);

        let token = null

        if (result) {
            const token = jwt.sign({ _id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
              });
        }
        
        return ({ auth: true, token: token });

    }

}

/*app.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.password === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})
*/
module.exports = FuncionarioController