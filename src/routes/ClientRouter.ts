import { Router } from "express";
import { clientController } from "../controllers/ClientController";

const router: Router = Router();

router.post("/client", clientController.store);
router.get("/client", clientController.getAll);
router.put("/client/:id", clientController.update);

export { router };