import { Injectable } from '@angular/core';
import { Livro } from '../models/Livro';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private livros: Livro[] = [];
  private listaAtual = new Subject<Livro[]>();
  constructor(private httpClient: HttpClient) {}

  /* permite que os componentes se inscrevam para receber notificações de modificação na lista
   * @return Observable<Livro[]>
   */
  getListaAtualObservable(): Observable<Livro[]> {
    return this.listaAtual.asObservable();
  }

  getLivros(): void {
    /// anotação genérica no método 'get' detalha os membros que 'dados' terá
    this.httpClient
      .get<{ livros: any }>('http://localhost:3000/api/livros')
      .pipe(
        map((dados) => {
          return dados.livros.map((livro) => {
            return {
              id: livro._id,
              titulo: livro.titulo,
              autor: livro.autor,
              nroPag: livro.nroPag,
            };
          });
        })
      )
      .subscribe((livros) => {
        this.livros = livros;
        console.log(livros);
        this.listaAtual.next([...this.livros]);
      });
  }

  addLivro(titulo: string, autor: string, nroPag: number): void {
    const livro: Livro = {
      id: null,
      titulo,
      autor,
      nroPag,
    };
    console.log("addLivro livro value: ", livro);
    this.httpClient
      .post<{_id:String}>('http://localhost:3000/api/livros', livro)
      .subscribe((dados) => {
        //retornar a id gerada pelo mongodb para o item
        livro.id = dados._id;
        this.livros.push(livro);
        this.listaAtual.next([...this.livros]);
        console.log(this.livros);
      });
  }

  //TODO: Implementar método para deletar e para editar registros
  editLivro(id: String): void {}

  deleteLivro(id: String): void {
    console.log(id);
    this.httpClient
      .delete(`http://localhost:3000/api/livros/${id}`)
      .subscribe(() => {
        console.log('remoção do id: ', id);
        this.livros = this.livros.filter((livro) => {
          return id !== livro.id;
        });
        this.listaAtual.next([...this.livros]);
      });
  }
}
