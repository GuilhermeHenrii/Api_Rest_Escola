import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models)); // aqui estamos iterando novamente no array models e fazendo uma verificação curto-circuito.
// Se o model.associate retornar undefined é pq não existe esse método dentro do model iterado e a outra parte da expressão não será executada
// Se retornar algo true, quer dizer que exste o método dentro do model e a segunda parte do código será executada.
