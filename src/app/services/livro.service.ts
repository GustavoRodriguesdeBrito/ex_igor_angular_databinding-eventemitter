import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private livros: Livro[] = [];
  private listaAtual = new Subject<Livro[]>();
  constructor() {}

  /* permite que os componentes se inscrevam para receber notificações de modificação na lista
  * @return Observable<Livro[]>
  */
  getListaAtualObservable(): Observable<Livro[]> {
    return this.listaAtual.asObservable();
  }

  getLivros(): Livro[] {
    return [...this.livros];
  }

  addLivro(id: number, titulo: string, autor: string, nroPaginas: number) {
    const livro: Livro = {
      id,
      titulo,
      autor,
      nroPaginas,
    };
    this.livros.push(livro);
    this.listaAtual.next([...this.livros]);
  }

  //TODO: Implementar método para deletar e para editar registros
  editLivro() {}

  deleteLivro() {}
}
