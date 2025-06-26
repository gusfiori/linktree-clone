import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("API Hub de Links - Base funcionando!");
});

export default app;