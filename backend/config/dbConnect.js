import mongoose from "mongoose";
import "dotenv/config"; 

const connectionString = process.env.DB_CONNECTION_STRING;

async function conectNaDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
};

export default conectNaDatabase;