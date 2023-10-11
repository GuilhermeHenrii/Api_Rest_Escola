"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async create(req, res) {
    try {
      const newAluno = await _Aluno2.default.create(req.body);
      return res.json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID do aluno'],
        });
      }

      // adicionei a chave de config e coloquei os atributos que irão ser listados por aluno, a ordem: pelo id de forma decrescente e incluimos o model de foto com os atributos id e filename
      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // alunos e fotos serão exibidos de forma decrescente, ou seja, a ultima foto que foi adicionada será a primeira a ser lida.
        // Pensando em um foto de perfil, esse comportamento seria o esperado, tendo em vista que o usuario quer que a ultima foto que ele enviou, seja a foto de perfil atual.
        include: {
          model: _Foto2.default,
          attributes: ['id', 'filename', 'url'], // incluí o model Foto, para ser exibido junto com os alunos, para isso acontecer devemos definir a relação de ambos nos models
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      // adicionei a chave de config e coloquei os atributos que irão ser listados por aluno, a ordem: pelo id de forma decrescente e incluimos o model de foto com os atributos id e filename
      const showAlunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']], // alunos e fotos serão exibidos de forma decrescente, ou seja, a ultima foto que foi adicionada será a primeira a ser lida.
        // Pensando em um foto de perfil, esse comportamento seria o esperado, tendo em vista que o usuario quer que a ultima foto que ele enviou, seja a foto de perfil atual.
        include: {
          model: _Foto2.default,
          attributes: ['id', 'filename', 'url'], // incluí o model Foto, para ser exibido junto com os alunos, para isso acontecer devemos definir a relação de ambos nos models
        },
      });
      return res.json(showAlunos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['Informe o ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const newAluno = await aluno.update(req.body);

      res.json(newAluno);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const deleteAluno = await aluno.destroy();
      const { nome } = deleteAluno;

      return res.json(`Aluno ${nome} deletado com sucesso`);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
