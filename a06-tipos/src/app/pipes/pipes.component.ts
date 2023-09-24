import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './pipes.component.html',

})
export class PipesComponent {

  nombre: string = 'Miguel';
  nombre2 = 'miguel GARcia garcia';
  lista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcen: number = 0.4567;
  precio: number = 1234.5;

  empresa = {
    nombre:"Soldaditos de Plomo",
    ident: "soldadosplomo",
    pass:"plomosoldados",
    direccion:{
      nombrePostal:"El soldadito",
      direccionPostal:"C/guerra 103",
      poblacionPostal:"Bilbao",
      cPostal:12345
    }
  }
  promesa = new Promise( (resolve,reject) => {
    setTimeout( () => resolve('Fin de la operacion'),4000)
  });

  fecha: Date = new Date();

  video: string = 'N-aK6JnyFmk';
  activar: boolean = true;
  pass: string = 'pepito';

  
}