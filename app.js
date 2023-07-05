import express from "express";
import routes from "./routes/index.js";
import db from "./config/connectDb.js";

db.on(
  "error",
  console.log.bind(console, "Não foi possível conectar ao banco de dados!")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);

export default app;
