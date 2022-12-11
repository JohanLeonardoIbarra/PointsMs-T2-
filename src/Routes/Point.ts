import { PointController } from 'Controller/Point';
import { Router } from 'express';

const pointRouter = Router();
const pointController = new PointController();

pointRouter.post('/', pointController.addPoints);
pointRouter.get('/:user', pointController.watchPoints);

export default pointRouter;
