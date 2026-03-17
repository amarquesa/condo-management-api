import { Router } from "express";
import {
  createAmenity,
  listAmenities,
  updateAmenity,
  deleteAmenity
} from "../controllers/amenityController.js";

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();
/**
 * @swagger
 * /amenities:
 *   get:
 *     summary: Lista todas as áreas comuns
 *     responses:
 *       200:
 *         description: Lista de amenities
 */
router.get("/", authMiddleware, listAmenities);
/**
 * @swagger
 * /amenities:
 *   post:
 *     summary: Criar nova área comum
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Amenity criada com sucesso
 */
router.post("/", authMiddleware, createAmenity);
/**
 * @swagger
 * /amenities/{id}:
 *   put:
 *     summary: Atualizar área comum
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 */
router.put("/:id", authMiddleware, updateAmenity);
/**
 * @swagger
 * /amenities/{id}:
 *   delete:
 *     summary: Deletar área comum
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deletado com sucesso
 */
router.delete("/:id", authMiddleware, deleteAmenity);

export default router;