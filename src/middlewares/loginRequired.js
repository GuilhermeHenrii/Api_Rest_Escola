import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Precisa fazer login'],
    });
  }

  const [, token] = authorization.split(' ');// aqui estamos fazendo uma atribuição via desestruturação. O método split retorna um array com valores separados por espaço (nesse caso). E token é uma variavel que vai receber o segundo valor desse array.

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({ where: { id } });

    // verificando se email ou id da requisição atual do usuario x é igual ao email e o id da base de dados desse mesmo usuário, isto é, se o usuário alterar seu email ou id, o mesmo precisará de gerr outro token válido para acessar o sistema
    if (user.dataValues.email !== email || user.dataValues.id !== id) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
