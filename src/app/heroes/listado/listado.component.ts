import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroe: string = '';

  borrarHeroe() {
    console.log('borrando...')
    // this.heroes.splice(0,1)//borra el elem 0 y solo 1 elem
    //const heroeBorrado = this.heroes.shift();//borra el primer elem del array y retorna un array
    this.heroe = this.heroes.shift() || '';

  }

}
