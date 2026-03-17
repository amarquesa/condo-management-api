import jwt from "jsonwebtoken";

const SECRET = "supersecret";

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    SECRET,
    { expiresIn: "1d" }
  );
}