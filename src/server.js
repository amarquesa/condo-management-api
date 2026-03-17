import express from "express";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import residentRoutes from "./routes/residentRoutes.js";
import condominiumRoutes from "./routes/condominiumRoutes.js";
import unitRoutes from "./routes/unitRoutes.js";

import { swaggerSpec } from "./swagger/swagger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

import amenityRoutes from "./routes/amenityRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();

/* MIDDLEWARES */

app.use(express.json());

/* HEALTH CHECK */

app.get("/", (req, res) => {
  res.json({
    message: "Condominium Management API running 🚀"
  });
});

/* DOCUMENTAÇÃO */

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ROTAS */

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/residents", residentRoutes);
app.use("/condominiums", condominiumRoutes);
app.use("/units", unitRoutes);
app.use("/amenities", amenityRoutes);
app.use("/reservations", reservationRoutes);

/* ERROR HANDLER */

app.use(errorHandler);

/* START SERVER */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});