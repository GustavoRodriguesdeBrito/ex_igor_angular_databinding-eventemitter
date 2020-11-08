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
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );

  next();
});

app.get("/api/livros", (req, res) => {
  Livro.find().then((documents) => {
    res.status(200).json({ livros: documents });
  });
});

app.get("/api/livros/:id", (req, res) => {
  Livro.findById(req.params.id).then((livro) => {
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ msg: "registro não encontrado" });
    }
  });
});

app.post("/api/livros", (req, res) => {
  let livro = new Livro({
    titulo: req.body.titulo,
    autor: req.body.autor,
    nroPag: req.body.nroPag,
  });
  livro.save().then((livroCadastrado) => {
    console.log(
      "livro cadastrado: ",
      livroCadastrado,
      "\n id do livro: ",
      livroCadastrado._id
    );
    res.status(201).json(livroCadastrado);
  });
});

app.put("/api/livros/:id", (req, res) => {
  const livro = new Livro({
    _id: req.params.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    nroPag: req.body.nroPag,
  });
  console.log(livro);
  Livro.updateOne({ _id: req.params.id}, livro).then((result) => {
    console.log(result);
    res
      .status(200)
      .json({ msg: `registro ${req.params.id} atualizado com sucesso` });
  });
});

app.delete("/api/livros/:id", (req, res) => {
  let id = req.params.id;
  Livro.deleteOne({ _id: id }).then((result) => {
    res.status(200).json({ message: `livro ${id} deletado` });
  });
});

module.exports = app;
