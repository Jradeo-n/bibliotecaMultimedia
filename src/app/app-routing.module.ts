import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

const routes: Routes = [
  { path: 'listado-peliculas', component: ListadoPeliculasComponent, pathMatch: 'full', data: { title: 'Listado de Películas' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
