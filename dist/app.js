"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Se usarmos:
// eslint-disable-next-line
//Estaremos desabilitando o esLin da próxima linha

// eslint-disable-line
// Estaremos desabilitando a linha em que o comentário está sendo usado

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');// resolver caminhos

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
// import helmet from 'helmet'; // segurança da aplicação
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors); // para configurar politicas do cors

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunosRoutes = require('./routes/alunosRoutes'); var _alunosRoutes2 = _interopRequireDefault(_alunosRoutes);
var _pictureRoutes = require('./routes/pictureRoutes'); var _pictureRoutes2 = _interopRequireDefault(_pictureRoutes);

// const whiteList = [// definindo a "lista branca" de ips que poderao acessar a api
//   'http://localhost:3000/',
// ];

// const corsOptions = {
//   origin: function (origin, callback) { // origin é setado automaticamente pelo browser quando tentarmos acessar a api
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by cours'));
//     }
//   },
// };

class App { // Usando classes para criar o backend
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, )); // setando permissao para as urls que irao acessar a api (permissão total)
    // this.app.use(helmet());
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));// configurando o caminho dos arquivos estáticos da aplicação
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunosRoutes2.default);
    this.app.use('/picture/', _pictureRoutes2.default);
  }
}

exports. default = new App().app;
