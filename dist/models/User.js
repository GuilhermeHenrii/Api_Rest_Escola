"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Model referente a tabela users
// O sequelize faz uso do Validator, então só de instalar o sequelize podemos usar tudo que o validator oferece

var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', // setando o campo vazio como uma string vazia
        validate: { // validando o campo nome da tabela
          len: {
            args: [2, 255],
            msg: 'Campo nome deve ter entre 2 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.STRING,
        defaultValue: '', // setando o campo vazio como uma string vazia
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // tipo virtual, pois esse dado não irá para a base de dados
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) { // método que compara a senha enviada no corpo da requisição com o hash da senha do usuario armazenada no banco de dados
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
