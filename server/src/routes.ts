import express from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import PoinstController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PoinstController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', upload.single('image'), pointsController.create);

export default routes;
