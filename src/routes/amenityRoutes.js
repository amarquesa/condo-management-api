import { Router } from "express";
import {
  createAmenity,
  listAmenities,
  updateAmenity,
  deleteAmenity
} from "../controllers/amenityController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, listAmenities);
router.post("/", authMiddleware, createAmenity);
router.put("/:id", authMiddleware, updateAmenity);
router.delete("/:id", authMiddleware, deleteAmenity);

export default router;