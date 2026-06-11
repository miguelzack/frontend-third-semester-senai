import express from 'express';
import jwt from 'jsonwebtoken'
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

const SECRET = "segredo-super-secreto";

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (email === "admin@email.com" && senha === "123") {
        const token = jwt.sign(
            {
                id: 1,
                nome: "Administrador",
                perfil: "admin"
            },
            SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.json({ token });
    }

    return res.status(401).json({
        erro: "Usuário inválido"
    });
});

function autenticar(req, res, next) {
    const auth = req.headers.authorization;

    if (!auth) {
        return res.status(401).json({
            erro: "Token não informado"
        });
    }

    const token = auth.split(" ")[1];

    try {
        const payload = jwt.verify(token, SECRET);

        req.usuario = payload;

        next();
    } catch {
        return res.status(401).json({
            erro: "Token inválido"
        });
    }
}

app.get("/perfil", autenticar, (req, res) => {
    res.json({
        mensagem: "Área protegida",
        usuario: req.usuario
    });
});

app.listen(3000);