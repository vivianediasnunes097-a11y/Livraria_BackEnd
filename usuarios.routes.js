import {
    criarusuario,
    listausuario,
    obterusuario,
    atualizarusuario,
    deletarusuario
} from "../controllers/usuarios.controller.js";
import express from "express"

const route = express.Router();

route.get("/", listausuario);
route.post("/", criarusuario);
route.get("/:id", obterusuario);
route.put("/:id", atualizarusuario);
route.delete("/:id", deletarusuario);

export default route;