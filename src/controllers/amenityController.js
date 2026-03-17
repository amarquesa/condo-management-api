import prisma from "../database/prismaClient.js";

/**
 * Criar uma nova área comum
 */
export const createAmenity = async (req, res) => {
  try {
    const { name, description } = req.body;

    const amenity = await prisma.amenity.create({
      data: {
        name,
        description
      }
    });

    return res.status(201).json(amenity);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar amenity" });
  }
};

/**
 * Listar todas as áreas comuns
 */
export const listAmenities = async (req, res) => {
  try {
    const amenities = await prisma.amenity.findMany();

    return res.json(amenities);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao listar amenities" });
  }
};

/**
 * Deletar uma área comum
 */
export const deleteAmenity = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.amenity.delete({
      where: {
        id: Number(id)
      }
    });

    return res.json({ message: "Amenity deletado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar amenity" });
  }
};
export const updateAmenity = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const amenity = await prisma.amenity.update({
      where: { id: Number(id) },
      data: { name, description }
    });

    return res.json(amenity);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar amenity" });
  }
};