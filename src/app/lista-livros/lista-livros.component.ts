import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../Model/Livro';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnInit {
  @Input()
  livros: Livro[] = []; /*
    {
      id:1,
      titulo:"livro1",
      autor:"autor1",
      nroPaginas:12,
    },
    {
      id:2,
      titulo:"livro2",
      autor:"autor2",
      nroPaginas:28,
    }
  ];*/

  constructor() {}

  ngOnInit(): void {}
}
