import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('picture'); // chamando o multer com o multer config e já setando o campo que sera enviado o arquivo. Single = apenas um arquivo.

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => { // função upload vai ter o error como parematro para um nova função,parametro esse que terá o valor do erro gerado, caso o arquivo enviado não seja uma imagem png ou jpeg. Esse parametro só estará disponóvel com a configuração do fileFilter()
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        const originalName = foto.originalname;
        const fileName = foto.filename;
        const alunoId = foto.aluno_id;
        const { url } = foto;

        return res.json({
          originalName, fileName, alunoId, url,
        });
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new PictureController();
