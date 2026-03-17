import prisma from "../database/prismaClient.js";

export const createCondominium = async (req, res) => {
  const { name, address } = req.body;

  const condominium = await prisma.condominiums.create({
    data: { name, address }
  });

  res.json(condominium);
};

export const listCondominiums = async (req, res) => {
  const condos = await prisma.condominiums.findMany();
  res.json(condos);
};