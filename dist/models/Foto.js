"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

// Modelagem dos dados da tabela de fotod
 class Foto extends _sequelize.Model {// class Foto extendida de Model
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        filename: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio.',
            },
          },
        },
        url: { // criando o campo url, que será um campo virtual (não irá para a base de dados) e passando um valor de url que irá retornar
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_appConfig2.default.urlImages}/${this.getDataValue('filename')}`;
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
} exports.default = Foto;
