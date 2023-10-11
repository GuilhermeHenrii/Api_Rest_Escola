import { Router } from 'express';
import userController from '../controllers/UserController'; // Note que estamos importando userController com u minusculo. Isto pq a classe já está instanciada, ou seja, retorna um objeto.
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, userController.store); // Note que não inserimos a rota referente ao users aqui, pois já fizemos isso no app.js

// Em um sistema real, essas rotas não deveriam existir
// router.get('/', loginRequired, userController.index); // lista usuarios
// router.get('/:id', userController.show); // lista usuario

router.put('/', loginRequired, userController.update);

router.delete('/', loginRequired, userController.delete);

export default router;
