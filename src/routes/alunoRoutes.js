import { Router } from 'express';
import alunocontroller from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunocontroller.index);
router.post('/', loginRequired, alunocontroller.store);
router.put('/:id', loginRequired, alunocontroller.update);
router.get('/:id', alunocontroller.show);
router.delete('/:id', loginRequired, alunocontroller.delete);

export default router;
