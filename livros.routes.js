import {
    criarlivro,
    listalivro,
    obterlivro,
    atualizarlivro,
    deletarlivro
} from "../controllers/livros.controller.js";
// const express = require("express")
import express from "express"
const router = express.Router();
router.get("/", listalivro)
router.post("/", criarlivro)
router.get("/:id",obterlivro)
router.put("/:id", atualizarlivro)
router.delete("/:id", deletarlivro)

export default router;