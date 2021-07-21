import { Component } from "@angular/core";


@Component({
    selector: "app-contador",
    template: `
        <h1>{{ title }}</h1>
        <h2>La base del programa es: {{ counter }}</h2>
        <button (click)="accumulate(counter)">+ {{ counter }}</button>
        <h2>{{ number }}</h2>
        <button (click)="accumulate(-counter)">- {{ counter }}</button>
    `
})
export class ContadorComponent {
    public title: string = 'App Contador';
    public number: number = 240;
    public counter: number = 10;
    /*
    add() {
        this.number += 1;
    }

    substract() {
        this.number -= 1;
    }
    */

    accumulate( value: number ) {
    this.number += value;
  }
}