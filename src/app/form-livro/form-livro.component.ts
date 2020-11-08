import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Livro } from '../models/Livro';
import { LivroService } from '../services/livro.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
})
export class FormLivroComponent implements OnInit {

  private modo: String = 'criar';
  private idLivro: String;
  public livro:Livro;

  constructor(public livroSvc: LivroService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    //identificar se o formulário deve cadastrar ou editar um registro baseado no parâmetro de URL passado
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if (paramMap.has('idLivro')) {
        this.modo = 'editar';
        this.idLivro = paramMap.get('idLivro');
        //busque os dados do livro que será editado
        this.livroSvc.getLivro(this.idLivro).subscribe((dadosLivro)=>{
          this.livro = {
            id:dadosLivro._id,
            titulo:dadosLivro.titulo,
            autor:dadosLivro.autor,
            nroPag:dadosLivro.nroPag
          };
        });
      } else {
        this.modo = 'criar';
        this.idLivro = null;
      }
    });
  }

  onSalvarLivro(formLivro: NgForm) {
    if (formLivro.invalid) return;
    if (this.modo === 'criar') {
      this.livroSvc.addLivro(
        formLivro.value.titulo,
        formLivro.value.autor,
        formLivro.value.nroPag
      );
    } else {
      this.livroSvc.editLivro(
        this.idLivro,
        formLivro.value.titulo,
        formLivro.value.autor,
        formLivro.value.nroPag
      )
    }
    formLivro.resetForm();
  }
}
