import prisma from "../database/prismaClient.js";

export const getUsers = async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await prisma.users.findUnique({
    where: { id: Number(id) }
  });

  res.json(user);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  await prisma.users.delete({
    where: { id: Number(id) }
  });

  res.json({ message: "Usuário removido" });
};