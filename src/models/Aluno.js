// Como nossa tabela tem o nome alunos, o model terá o nome Aluno.js, pois um model é referente a um dado.

import Sequelize, { Model } from 'sequelize';

// Modelagem dos dados da tabela alunos
export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe.',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Campo idade precisa ser um número inteiro',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  // fazendo associação de alunos para a foto, nesse caso a relação será: alunos possuem muitas fotos, tendo aluno_id como chave estrangeira da relação
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
