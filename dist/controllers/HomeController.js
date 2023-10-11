"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    // const newAluno = await Aluno.create({
    // nome: req.body.nome,
    // sobrenome: req.body.sobrenome,
    // email: req.body.email,
    // idade: req.body.idade,
    // peso: req.body.peso,
    // altura: req.body.altura,
    // });
    res.json('Index');
  }
}

exports. default = new HomeController(); // Exportando a classe já instanciada pois o que queremos aqui nesse caso é o objeto da classe, e não a classe em si
