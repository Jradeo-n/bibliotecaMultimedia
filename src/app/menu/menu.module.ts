import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';// Importa el módulo que contiene app-menu
import { MenuComponent } from '../menu/menu.component';
import { MaterialModule } from '../Modulos/material.module';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent,
    ListadoPeliculasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [MenuComponent,ListadoPeliculasComponent]
})
export class MenuModule { }