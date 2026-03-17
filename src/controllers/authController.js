import prisma from "../database/prismaClient.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password: hash,
      role: "admin"
    }
  });

  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.users.findUnique({
    where: { email }
  });

  if (!user) {
    return res.status(401).json({ error: "Usuário não encontrado" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(401).json({ error: "Senha inválida" });
  }

  const token = generateToken(user);

  res.json({
    user,
    token
  });
};