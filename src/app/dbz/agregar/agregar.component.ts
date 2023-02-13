import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService ) {

  }

  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    //event.preventDefault();//prevee el comportamiento previo que tiene el submit de un form
    if(this.nuevo.nombre.trim().length === 0){    //.trim() para borrar espacios en blanco
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }


  }

}
