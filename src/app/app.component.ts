import { Component } from '@angular/core';
import { Livro } from './Model/Livro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  livros: Livro[] = [];
  onLivroCadastrado(livro: Livro) {
    this.livros = [...this.livros, livro];
  }
}
