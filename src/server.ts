import dotenv from "dotenv";
import express, { Application } from "express";
import userRoutes from "./routes/userRoutes";
import leadRoutes from "./routes/leadRoutes";
import authRoutes from "./routes/authRoutes";
const cors = require("cors");

// Carregar variáveis de ambiente do arquivo .env
dotenv.config({ path: ".env" });

const app: Application = express();
const port = process.env.PORT || 3322;

// Configurações do Express
app.use(express.json());

// Use cors
app.use(
    cors({
        origin: "*",
    })
);

// Rotas
app.use("/api", userRoutes);
app.use("/api", leadRoutes);
app.use("/api", authRoutes);

// Iniciar o Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});