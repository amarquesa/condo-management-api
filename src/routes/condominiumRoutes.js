import { Router } from "express";
import { createCondominium, listCondominiums } from "../controllers/condominiumController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createCondominium);
router.get("/", authMiddleware, listCondominiums);

export default router;