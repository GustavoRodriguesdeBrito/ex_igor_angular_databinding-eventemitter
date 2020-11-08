export class Livro {
  id: String;
  titulo: String;
  autor: String;
  nroPag: Number;

  constructor(id: String, titulo: String, autor: String, nroPag: Number) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPag = nroPag;
  }
}
