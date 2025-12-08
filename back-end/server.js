//importações
const express = require("express");
const cors = require('cors');
const { PrismaClient } = require("@prisma/client");
//inicialiazação
const app = express();
const prisma = new PrismaClient();
const PORT = 3000;
//middlewares
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Apenas a sua origem frontend está permitida
    optionsSuccessStatus: 200 // Para navegadores mais antigos
};
app.use(cors(corsOptions));
//json
app.use(express.json());
// inicia servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor a Correr em http://localhost:${PORT}`);
    console.log('MongoDB/Prisma Conectado!');
})
//importa bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;
//rota para cadastro
app.post("/cadastro", async (req, res) => {
    //extrair dados
    const {username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({error:"Todos os campos são obrigatórios."});
    }
    try {
        // verefica se o usuário já existe pelo email
        const existingUser = await prisma.user.findUnique({
            where: {email: email},
        });
        if (existingUser){
            //Código de status 409: Conflito (Recurso já existe)
            return res.status(409).json({error: "email já registrado."})
        }

        //hash da senha
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        //salva o novo usuario no MongoDB via prisma
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        })
        res.status(201).json({
            massage: "Usuário registrado com sucesso!",
            user : {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                createdAt: newUser.createdAt,
            }
        })
    }catch(error){
        console.error('Erro ao registar utilizador:', error);
        // Código de status 500: Erro interno do servidor
        res.status(500).json({ error: 'Erro interno do servidor ao tentar registar.' });
    }
});