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
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunosRoutes from './routes/alunosRoutes';
import pictureRoutes from './routes/pictureRoutes';

class App { // Usando classes para criar o backend
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));// configurando o caminho dos arquivos estáticos da aplicação
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
