import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// adicionei o loginRequired no create para fazer deplay com mais segurança
router.post('/', loginRequired, alunoController.create);
router.get('/:id', alunoController.show);
router.get('/', alunoController.index);
router.patch('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
