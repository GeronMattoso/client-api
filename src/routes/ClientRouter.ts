import { Router } from "express";
import { clientController } from "../controllers/ClientController";

const router: Router = Router();

router.get("/client", clientController.getAll);

export { router };