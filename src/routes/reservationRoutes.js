import { Router } from "express";
import { createReservation, listReservations } from "../controllers/reservationController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createReservation);
router.get("/", authMiddleware, listReservations);

export default router;