import { Router } from 'express';

import usercontroller from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// não vamos chamar de index porque estamos criando algo e normal chamar create
// ou store

router.get('/', loginRequired, usercontroller.index);
// router.get('/:id', usercontroller.show);

router.post('/', loginRequired, usercontroller.store);
router.put('/', loginRequired, usercontroller.update);
router.delete('/', loginRequired, usercontroller.delete);
export default router;
