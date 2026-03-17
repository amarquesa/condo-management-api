# 🏢 Condominium Management API

API REST para gerenciamento de condomínios, desenvolvida com Node.js, Express e PostgreSQL.

## 🚀 Funcionalidades

- Cadastro e autenticação de usuários
- Gestão de moradores e unidades
- Controle de áreas comuns (amenities)
- Sistema de reservas
- Integração entre módulos do sistema

## 🛠 Tecnologias

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Swagger
- JWT (autenticação)

## 📌 Arquitetura

Projeto estruturado em camadas:
- Routes
- Controllers
- Middlewares
- Database (Prisma)

## 🔗 Endpoints principais

- POST /auth/login
- POST /users
- GET /users
- POST /amenities
- GET /amenities
- POST /reservations

## ▶️ Como rodar o projeto

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
