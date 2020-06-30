import express from "express";

import PoinstController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

const pointsController = new PoinstController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;
