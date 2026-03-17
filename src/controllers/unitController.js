import prisma from "../database/prismaClient.js";

export const createUnit = async (req, res) => {
  const { condominium_id, number, block } = req.body;

  const unit = await prisma.units.create({
    data: {
      condominium_id,
      number,
      block
    }
  });

  res.json(unit);
};

export const listUnits = async (req, res) => {
  const units = await prisma.units.findMany({
    include: { residents: true }
  });

  res.json(units);
};