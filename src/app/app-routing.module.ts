import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormLivroComponent } from './form-livro/form-livro.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';

const routes: Routes = [
  { path: '', component: ListaLivrosComponent },
  { path: 'novo', component: FormLivroComponent },
  { path:'editar/:idLivro', component: FormLivroComponent},
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
