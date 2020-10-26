import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
})
export class FormLivroComponent implements OnInit {

  constructor(public livroSvc: LivroService) {}

  ngOnInit(): void {}

  onCadastrarLivro(formLivro: NgForm) {
    if (formLivro.invalid) return;
    this.livroSvc.addLivro(
      formLivro.value.id,
      formLivro.value.titulo,
      formLivro.value.autor,
      formLivro.value.nroPag
    );
    formLivro.resetForm();
  }
}
