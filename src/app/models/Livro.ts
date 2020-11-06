export class Livro {
  id: String;
  titulo: string;
  autor: string;
  nroPag: number;

  constructor(id: String, titulo: string, autor: string, nroPag: number) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPag = nroPag;
  }
}
