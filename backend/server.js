import app from "./src/app.js";
import conectNaDatabase from "./config/dbConnect.js";

const conexao = await conectNaDatabase();

conexao.on("error", (erro) => {
    console.error("❌ Erro na conexão com o banco: ", erro);
});

conexao.once("open", () => {
    console.log("✅ Conexão com o banco de dados realizada com sucesso!");
});

const PORT = 3001;
app.listen(PORT, ()  => {
    console.log(`🚀 Servidor funcionando na porta ${PORT}`);
});