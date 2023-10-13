// Model referente a tabela users
// O sequelize faz uso do Validator, então só de instalar o sequelize podemos usar tudo que o validator oferece

import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // setando o campo vazio como uma string vazia
        validate: { // validando o campo nome da tabela
          len: {
            args: [2, 255],
            msg: 'Campo nome deve ter entre 2 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', // setando o campo vazio como uma string vazia
        unique: { // configurando a mensagem que vai aparecer caso o unique do email de erro
          msg: 'Email já existe',
        },
        validate: { // validando o campo email da tabela
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '', // setando o campo vazio como uma string vazia
      },
      password: {
        type: Sequelize.VIRTUAL, // tipo virtual, pois esse dado não irá para a base de dados
        defaultValue: '', // setando o campo vazio como uma string vazia
        validate: { // validando o campo password da tabela
          len: {
            args: [6, 50],
            msg: 'Senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => { // função que é executada automaticamente em respostas de eventos relacionadas ao modelo de banco de dados. Contexto do sequelize. Um gancho pode ser assíncrono e retornar uma promisse.
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) { // método que compara a senha enviada no corpo da requisição com o hash da senha do usuario armazenada no banco de dados
    return bcryptjs.compare(password, this.password_hash);
  }
}
