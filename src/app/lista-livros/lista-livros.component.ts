import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from '../models/Livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnInit, OnDestroy {
  livros: Livro[] = [];
  private listaSubscription: Subscription;
  constructor(private livroSvc: LivroService) {}

  ngOnInit(): void {
    this.livros = this.livroSvc.getLivros();

    this.listaSubscription = this.livroSvc
      .getListaAtualObservable()
      .subscribe((livros: Livro[]) => {
        this.livros = livros;
      });
  }
  ngOnDestroy(): void {
    this.listaSubscription.unsubscribe();
  }
}
