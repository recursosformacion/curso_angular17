import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, retry } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  salida = {
    valor:0
  }


  constructor() {

    // let obs = new Observable(observer => {
    //   let contador = 0;
    //   let intervalo = setInterval(() => {
    //     contador += 1;
    //     const salida = {
    //       valor: contador
    //     };
    //     observer.next(salida);
    //     if (contador === 3) {
    //       clearInterval(intervalo);
    //       observer.complete();
    //     }
    //     if (contador === 2) {
    //       clearInterval(intervalo);
    //       observer.error('Mensaje error');
    //     }
    //   }, 1000);
    // }).pipe(
    //   map(response => response.valor),
    //   filter( (valor, index) => {
    //     console.log('Filter', valor,index);
    //     if ( (valor % 2 === 0) ){
    //       return true;
    //     }
    //     return false;

    //   })
    //   );

    let obs = this.cuentaTres();
    obs=obs.pipe(retry());   //numero de reintentos)   <---

    obs.subscribe(
      numero => console.log('Recibo ', numero),
      error => console.log('Errores ', error),
      () => console.log('Fin de observacion')
    );


  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  cuentaTres(): Observable<any>{
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        
        this.salida.valor= contador
        
        observer.next(this.salida);
        if (contador === 3) {
         // clearInterval(intervalo);
          observer.complete();
        }
        if (contador === 2) {
          //clearInterval(intervalo);
          //observer.error('Mensaje error');
        }
      }, 1000);
    }).pipe(
      map((response:any) => response.valor),
      filter( (valor, index) => {
        console.log('Filter', valor,index);
        if ( (valor % 2 === 0) ){
          return true;
        }
        return false;

      })
      );
  }
}
