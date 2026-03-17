import prisma from "../database/prismaClient.js";

/* CRIAR MORADOR */

export const createResident = async (req, res) => {

  const { name, email, phone, unit_id } = req.body;

  const resident = await prisma.residents.create({
    data: {
      name,
      email,
      phone,
      unit_id
    }
  });

  res.json(resident);
};

/* LISTAR MORADORES */

export const listResidents = async (req, res) => {

  const residents = await prisma.residents.findMany({
    include: {
      unit: true
    }
  });

  res.json(residents);
};