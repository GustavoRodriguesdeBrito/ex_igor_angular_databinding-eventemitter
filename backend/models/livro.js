const mongoose = require("mongoose");

const livroSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  nroPag: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Livro", livroSchema);
