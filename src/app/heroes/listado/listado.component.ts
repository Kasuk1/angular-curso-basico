import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ["Spiderman", "Ironman", "Superman", "Supergirl"];
  public deletedHeroe: string = "" ;

  deleteFromArray(): void {
    this.deletedHeroe =this.heroes.pop() || "";
  }

  /* constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  } */

}