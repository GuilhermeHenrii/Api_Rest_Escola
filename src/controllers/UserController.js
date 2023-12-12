import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });// retornando apenas o id, nome e email do usuario
    } catch (e) {
      return res.status(400).json({ // retorna um objeto com a chave erros, com os erros que deu
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) { // sempre usar o try/catch quando usar async/await
    try {
      const showUsers = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // setando apenas o id, nome e email para serem enviados na requisição, melhorando um pouco a questão da falha de segurança em ter uma listagem de usuários sendo permitida apenas de o usuário logar.
      return res.json(showUsers);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const showUser = await User.findByPk(req.params.id);
      const { id, nome, email } = showUser;// retornando apenas o id, nome e email do usuario
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const newData = await user.update(req.body);
      const { id, nome, email } = newData;// retornando apenas o id, nome e email do usuari
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const deleteUser = await user.destroy();
      // eslint-disable-next-line
      const { nome } = deleteUser;
      return res.json({ usuarioDeletado: true });// retornando que o usuario em quetão foi deletado
    } catch (e) {
      return res.status(400).jason({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // Exportando a classe já instanciada pois o que queremos aqui nesse caso é o objeto da classe, e não a classe em si

/*
Padrão de nomes de métodos usados:
index -> lista todos os usuários -> get
store/create -> cria um novo usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> patch ou put
*/
