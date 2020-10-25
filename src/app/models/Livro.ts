export class Livro {
  id: number;
  titulo: string;
  autor: string;
  nroPaginas: number;

  constructor(id: number, titulo: string, autor: string, nroPaginas: number) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPaginas = nroPaginas;
  }
}
