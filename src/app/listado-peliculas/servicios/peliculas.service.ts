import { Injectable } from '@angular/core';
import { SUPERHEROES, Superheroe } from 'src/app/mock/mock-superheroes';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  getPeliculas(): Superheroe[] {
    return SUPERHEROES;
  }
}
