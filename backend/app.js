const express = require("express");
const mongoose = require("mongoose");

const app = express();
/// abrir o body-parser do express
app.use(express.json());

const Livro = require("./models/livro");

mongoose
  .connect(
    "mongodb+srv://gustavo:6s4JSZpJ9WehbCHb@cluster0.hnsxl.mongodb.net/app-livro?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Conexão com MongoDB Atlas estabelecida.");
  })
  .catch((err) => {
    console.error(err);
  });

/// inserir headers na mensagem de resposta
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.get("/api/livros", (req, res) => {
  Livro.find().then((documents) => {
    res.status(200).json({ livros: documents });
  });
});

app.get("/api/livros/:id", (req, res) => {
  res.sendStatus(501);
});

app.post("/api/livros", (req, res) => {
  let livro = new Livro({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    nroPag: req.body.nroPag,
  });
  console.log(livro);
  livro.save();

  res.sendStatus(201);
});

app.put("/api/livros/:id", (req, res) => {
  res.sendStatus(501);
});

app.delete("/api/livros/:id", (req, res) => {
  res.sendStatus(501);
});

module.exports = app;
