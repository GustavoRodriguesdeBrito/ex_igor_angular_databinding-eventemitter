import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Livro } from '../Model/Livro';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
})
export class FormLivroComponent implements OnInit {
  @Output() livroCadastrado = new EventEmitter();
  id: number;
  titulo: string;
  autor: string;
  nroPag: number;

  constructor() {}

  ngOnInit(): void {}

  onCadastrarLivro() {
    console.log('cadastrado');
    const livro: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      nroPaginas: this.nroPag,
    };
    this.livroCadastrado.emit(livro);
  }
}
