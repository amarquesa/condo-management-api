import { Router } from "express";
import { createUnit, listUnits } from "../controllers/unitController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createUnit);
router.get("/", authMiddleware, listUnits);

export default router;