import { Router } from "express";
import { getUsers, getUser, deleteUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUser);
router.delete("/:id", authMiddleware, deleteUser);

export default router;