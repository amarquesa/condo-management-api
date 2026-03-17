import { Router } from "express";
import { createResident, listResidents } from "../controllers/residentController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createResident);
router.get("/", authMiddleware, listResidents);

export default router;