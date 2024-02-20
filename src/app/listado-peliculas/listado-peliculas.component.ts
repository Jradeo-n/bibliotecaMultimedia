import { Component, OnInit } from '@angular/core';
import { Superheroe } from '../mock/mock-superheroes';
import { PeliculasService } from './servicios/peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})

export class ListadoPeliculasComponent implements OnInit {
  heroes: Superheroe[];
  filteredHeroes: Superheroe[]; // Array para almacenar los héroes filtrados
  searchTerm: string; // Término de búsqueda

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.heroes = this.peliculasService.getPeliculas();
    this.filteredHeroes = this.heroes; // Inicialmente, muestra todos los héroes
  }

  search(): void {
    // Filtrar los héroes basado en el término de búsqueda
    this.filteredHeroes = this.heroes.filter(heroe =>
      heroe.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
