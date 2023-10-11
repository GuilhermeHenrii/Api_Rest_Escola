"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController); // Note que estamos importando homeController com h minusculo. Isto pq a classe já está instanciada, ou seja, retorna um objeto.

const router = new (0, _express.Router)();

router.get('/', _HomeController2.default.index);

exports. default = router;
