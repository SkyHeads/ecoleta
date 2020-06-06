import { Router } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const route = Router();

const pointsController = new PointsController;
const itemsController = new ItemsController;

route.get('/items', itemsController.index);

route.post('/points', pointsController.create);

export default route;