import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react"
})

server.get("/produtos", (req, res) => {
    connection.query("SELECT * FROM produtos", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

server.get("/mensagens", (req, res) => {
    connection.query("SELECT * FROM comentarios", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

server.post("/mensagens", (req, res) => {
    const {nome,msg } = req.body;
    const banco = `INSERT INTO comentarios(nome,msg) values ('${nome}','${msg}')`;
    connection.query(banco, (error, result) => {
        if (error) {
            res.json({msg:"Erro ao inserir usuário"})
        } else  {
           res.json(result)
        }
    })
})

server.listen(3333);