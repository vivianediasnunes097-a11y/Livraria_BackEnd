import bodyParser from "body-parser";
import cors from "cors";
import livrosRoutes from "./routes/livros.routes.js"
import avaliacoesRoutes from "./routes/avaliacoes.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"

import express from "express"

const app = express();
app.use(cors());
app.use(bodyParser.json())

// app.use("/", (req, res) => {
//     res.json({msg: "Servidor funcionando"})
// })

app.use("/livros", livrosRoutes);
app.use("/avaliacoes", avaliacoesRoutes);
app.use("/usuarios", usuariosRoutes);


const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}/ `))