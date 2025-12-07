//importações
const express = require("express");
const { PrismaClient } = require("@prisma/client");
//inicialiazação
const app = express();
const prisma = new PrismaClient();
const PORT = 3000;
//middlewares
//json
app.use(express.json());
//teste da rota 
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})
app.listen(PORT, () => {
    console.log(`🚀 Servidor a Correr em http://localhost:${PORT}`);
    console.log('MongoDB/Prisma Conectado!');
})