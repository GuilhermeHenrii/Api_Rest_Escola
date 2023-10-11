"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _tokenController = require('../controllers/tokenController'); var _tokenController2 = _interopRequireDefault(_tokenController);

const router = new (0, _express.Router)();

router.post('/', _tokenController2.default.store);

exports. default = router;
