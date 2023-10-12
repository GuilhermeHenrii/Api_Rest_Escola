import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

// Modelagem dos dados da tabela de fotod
export default class Foto extends Model {// class Foto extendida de Model
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        url: { // criando o campo url, que será um campo virtual (não irá para a base de dados) e passando um valor de url que irá retornar
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.urlImages}/${this.getDataValue('filename')}`;
            // get retorna o valor que foi passado
          },
        },
      },
      {
        sequelize,
        tableName: 'foto',
      },
    );
    return this;
  }

  static associate(models) {
    // aqui podemos ver que o método estático associate, chama o this, que nesse caso, por ele ser um método estático, é a própria classe
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });// this (classe fotos) pertencia a: models.Aluno através da chave estrangeira 'aluno_id'
  }
}
