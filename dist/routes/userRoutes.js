"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController); // Note que estamos importando userController com u minusculo. Isto pq a classe já está instanciada, ou seja, retorna um objeto.
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/', /* loginRequired, */ _UserController2.default.store); // Note que não inserimos a rota referente ao users aqui, pois já fizemos isso no app.js

// Em um sistema real, essas rotas não deveriam existir
// router.get('/', loginRequired, userController.index); // lista usuarios
// router.get('/:id', userController.show); // lista usuario

router.put('/', _loginRequired2.default, _UserController2.default.update);

router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;
