import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

  nombre: String = 'Ironman';
  edad: number = 42;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return ` ${ this.nombre } - ${ this.edad }`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    console.log("Hey!...")
    this.edad = 30;
  }


}
