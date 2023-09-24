import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent {

  constructor() {
    this.cuentaTres()
      .then(mensaje => console.log('FIn de la prueba', mensaje))
      .catch(error => console.error('Error en promesa', error));
  }

  cuentaTres(): Promise<string> {
    return  new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          reject('Error porque si');
          //resolve('Perfecto');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
  
}
