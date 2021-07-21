import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //Todos los componentes dentro del modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Todo lo que quiero hacer visible fuera del modulo
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}