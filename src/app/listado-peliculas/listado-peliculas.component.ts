import { Component, OnInit } from '@angular/core';
import { Superheroe } from '../mock/mock-superheroes';
import { PeliculasService } from './servicios/peliculas.service';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './modal/edit-modal/edit-modal.component';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css'],
})
export class ListadoPeliculasComponent implements OnInit {
  heroes: Superheroe[];
  filteredHeroes: Superheroe[]; // Array para almacenar los héroes filtrados
  searchTerm: string; // Término de búsqueda
  deletedHeroes: Superheroe[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.heroes = this.peliculasService.getPeliculas();
    this.filteredHeroes = this.heroes; 
  }

  search(): void {
    // Filtrar los héroes basado en el término de búsqueda
    this.filteredHeroes = this.heroes.filter((heroe) =>
      heroe.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  edit(heroe: Superheroe): void {
      const dialogRef = this.dialog.open(EditModalComponent, {
        width: '500px',
        data: heroe,
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('Modal cerrado');
      });
  }

  deleteHero(heroe: Superheroe): void {
    // Mover el héroe eliminado a la lista deletedHeroes
    this.deletedHeroes.push(heroe);

    // Filtrar la lista de héroes excluyendo los héroes eliminados
    this.heroes = this.heroes.filter((h) => h.id !== heroe.id);

    // Actualizar la lista de héroes filtrados
    this.filteredHeroes = this.filteredHeroes.filter((h) => h.id !== heroe.id);
  }

  add(): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Agregar el nuevo héroe a la lista de héroes
        console.log(result, 'result');
        this.heroes.push(result);
        this.search();
      }
    });
  }
}
