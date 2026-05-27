# 🏢 Condominium Management API

API REST para gerenciamento de condomínios, moradores, unidades e reservas de áreas comuns.

---

## 🚀 Tecnologias

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Swagger
- bcrypt
- Git/GitHub

## 📌 Funcionalidades

- Cadastro de usuários
- Autenticação JWT
- Controle de condomínios
- Gerenciamento de moradores
- Cadastro de unidades
- Reservas de áreas comuns
- Middleware de autenticação
- Documentação Swagger

---

## 🔐 Segurança

- Autenticação via JWT
- Senhas criptografadas com bcrypt
- Rotas protegidas com middleware

---

## 📡 Endpoints principais

### Auth
- POST /auth/login

### Usuários
- GET /users
- POST /users

### Moradores
- GET /residents
- POST /residents

### Condomínios
- GET /condominiums
- POST /condominiums

### Reservas
- GET /reservations
- POST /reservations

---

## 🚀 Como executar

```bash
git clone https://github.com/amarquesa/condo-management-api.git

cd condo-management-api

npm install

npm run dev
```

## 📄 Documentação Swagger

Disponível em:

```bash
http://localhost:3000/docs
```

## 📸 Demonstração

![Swagger](./docs/swagger-condo-api.png)


---

## 👩‍💻 Autor

Amanda Evelyn
