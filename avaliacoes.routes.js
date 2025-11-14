import {
    listarAvaliacoes,
    criarAvaliacao
} from "../controllers/avaliacoes.controller.js";
// const express = require("express")
import express from "express"
const router = express.Router();
router.get("/", listarAvaliacoes)
router.post("/", criarAvaliacao);

export default router