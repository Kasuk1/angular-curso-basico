import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';



@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: "WonderWoman",
          poder: 89500
        },
        {
          nombre: "SuperGirl",
          poder: 1200000
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push(personaje);
    }
}