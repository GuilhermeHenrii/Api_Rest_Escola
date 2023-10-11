"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    const { email = '', nome = '', password = '' } = req.body; // email e password do body da requisição

    if (!email || !password) { // verificando se email ou senha serao falsos
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } }); // pegando o user pelo email

    if (!user) { // verificando se existe usuario
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // Aqui podemos ver que a constante user tem acesso ao método passwordIsValid(), pois essa constante tem o valor de uma instancia da classe User, intancia essa que tem o valor do usuário em quesão.
    if (!(await user.passwordIsValid(password))) { // chamando metodo que verifica a senha
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, nome, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      id,
      nome,
      email,
    });
  }
}

exports. default = new TokenController();
