import prisma from "../database/prismaClient.js";

export const createAmenity = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const amenity = await prisma.amenity.create({
      data: { name }
    });

    return res.status(201).json(amenity);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar amenity" });
  }
};