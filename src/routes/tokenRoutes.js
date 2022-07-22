import { Router } from 'express';
/* estou ponto home em minusculo porque a classe já vira instanciada, porque o que vier na
variavel já vai ser um obj da class e não a clas */
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
