"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer); // vai tratar uploads
var _path = require('path'); // vai tratar o nome da extensao do arquivo e o caminho, respectivamente

const random = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => { // esse metodo filtra o tipo de arquivo que queremos receber
    // aqui estamos setando para png ou jpeg
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image.jpeg') {
      // instanciando o novo error do proprio multer
      return cb(new _multer2.default.MulterError('Arquivo precisa ser um PNG ou JPG'));
    }

    return cb(null, true);
  },

  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));// trata o caminho
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);// cb() recebe o error(null) e o nome, que será(Date.now), o extname vai pegar o nome original do arquivo, porem apenas a extensao(jpg, ico, etc)
    },
  }),
};
