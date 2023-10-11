"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Usando o sucrase, ferramenta de transpilação que permite utilizar conceitos mais modernos do Js
// Em ambientes que não suporta nativamente esses recursos
// Como o Es6 sendo usado no lado servidor
// Ferramenta que pode substituir o uso do babel em determinados tipos de situações

var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;

_app2.default.listen(port);
