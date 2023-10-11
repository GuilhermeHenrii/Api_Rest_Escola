import { Router } from 'express';
import homeController from '../controllers/HomeController'; // Note que estamos importando homeController com h minusculo. Isto pq a classe já está instanciada, ou seja, retorna um objeto.

const router = new Router();

router.get('/', homeController.index);

export default router;
