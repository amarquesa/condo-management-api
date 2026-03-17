import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Condominium Management API",
      version: "1.0.0",
      description: "API de gestão de condomínio"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"] // 👈 força leitura
};

export const swaggerSpec = swaggerJsDoc(options);