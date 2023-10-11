import multer from 'multer'; // vai tratar uploads
import { extname, resolve } from 'path'; // vai tratar o nome da extensao do arquivo e o caminho, respectivamente

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => { // esse metodo filtra o tipo de arquivo que queremos receber
    // aqui estamos setando para png ou jpeg
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image.jpeg') {
      // instanciando o novo error do proprio multer
      return cb(new multer.MulterError('Arquivo precisa ser um PNG ou JPG'));
    }

    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));// trata o caminho
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);// cb() recebe o error(null) e o nome, que será(Date.now), o extname vai pegar o nome original do arquivo, porem apenas a extensao(jpg, ico, etc)
    },
  }),
};
