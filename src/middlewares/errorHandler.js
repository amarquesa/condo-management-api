export function errorHandler(err, req, res, next) {

  console.error(err);

  if (err.name === "ZodError") {
    return res.status(400).json({
      error: "Dados inválidos",
      details: err.errors
    });
  }

  return res.status(500).json({
    error: "Erro interno do servidor"
  });
}