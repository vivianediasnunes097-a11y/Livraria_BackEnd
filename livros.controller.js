import { db } from "../config/db.js"

export async function criarlivro(req, res) {
    try {
        const { titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse } = req.body;
        if (!titulo | !autor | !genero |!editora |!ano_publicacao |!isbn |!idioma |!formato |!caminho_capa |!sinopse)
            return res.status(400).json({ erro: "Campos obrigatórios" });
        await db.execute(
            "INSERT INTO usuarios (titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse) VALUES (?, ?, ?)",
            [titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse]
        );

        res.json({ mensagem: "Livro criado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function listalivro(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM livros");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function obterlivro(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM livros WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length === 0)
            return res.status(404).json({ erro: "livro não encontrado" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function atualizarlivro(req, res) {
    try {
        const { nome, email, senha } = req.body;
        await db.execute(
            "UPDATE usuarios SET titulo = ?, autor = ?, genero = ?, editora = ?, ano_publiacao = ?, isbn = ?, idioma = ?, formato = ?, caminho_capa = ?, sinopse = ?, WHERE id = ?",
            [titulo, autor, genero, editora, ano_publicacao, isbn, idioma, formato, caminho_capa, sinopse, req.params.id]
        );
        res.json({ mensagem: "Livro atualizado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function deletarlivro(req, res) {
    try {
        await db.execute("DELETE FROM livros WHERE id = ?", [req.params.id]);
        res.json({ mensagem: "livro deletado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};