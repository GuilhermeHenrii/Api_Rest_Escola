// Se usarmos:
// eslint-disable-next-line
//Estaremos desabilitando o esLin da próxima linha

// eslint-disable-line
// Estaremos desabilitando a linha em que o comentário está sendo usado

import dotenv from 'dotenv';
import { resolve } from 'path';// resolver caminhos

dotenv.config();

import './database';

import express from 'express';
import helmet from 'helmet'; // segurança da aplicação
import cors from 'cors'; // para configurar politicas do cors

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunosRoutes from './routes/alunosRoutes';
import pictureRoutes from './routes/pictureRoutes';

const whiteList = [// definindo a "lista branca" de ips que poderao acessar a api
  'http://react.34.95.131.0.com.br',
  'http://localhost://4000',
  'http://localhost://3000',
];

const corsOptions = {
  origin: function (origin, callback) { // origin é setado automaticamente pelo browser quando tentarmos acessar a api
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by cours'));
    }
  },
};

class App { // Usando classes para criar o backend
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions)); // setando permissao para as urls que irao acessar a api
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));// configurando o caminho dos arquivos estáticos da aplicação
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunosRoutes);
    this.app.use('/picture/', pictureRoutes);
  }
}

export default new App().app;
