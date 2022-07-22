import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotocontroller from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotocontroller.store);

export default router;
