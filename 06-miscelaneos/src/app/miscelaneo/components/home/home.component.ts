import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-home',
  template: `
  <div #refediv>
  <h3 #refeh3> Esto es la prueba de viewchild</h3>
  <h3 #refeh3> Y esto es otro mensaje </h3>
  </div>
  <app-ng-style></app-ng-style>

  <app-css></app-css>
  <p>Parrafo de control</p>

  <app-clases></app-clases>

  <p [appResaltado]="'blue'">Prueba de directiva resaltado</p>


  <app-ng-switch></app-ng-switch>

  <app-multiple (salida)="verSalida( $event )" [men]="'Esto es el primero'" ></app-multiple>
  <app-multiple (salida)="verSalida1( $event )" [men]="'Esto es el segundo'" ></app-multiple>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  @ViewChild('refediv', { static: true }) leoDiv: ElementRef;
  @ViewChild('refeh3', { static: true }) leoH3: ElementRef;
  constructor(private conector: AlmacenService) { }

  ngOnInit() {
    console.log(this.leoDiv.nativeElement.innerHTML);
    this.leoH3.nativeElement.innnerHTML = "Otro mensaje";
    this.procesoEnvio();
  }
  async procesoEnvio(){
    
    let envio:number[] = [];
    let a = 1
    for(let a=1;a<10;a++){
      console.log('enviando =>' , envio);
      envio.push(a);
      await this.later(()=>this.conector.setData(envio),5000);
      
    }
  }
  later(funcion,delay) {
    return new Promise(function(funcion) {
        setTimeout(funcion, delay);
        console.log('enviando ' )
    });
  }



  verSalida(mensaje: string) {
    console.log("salida:", mensaje);
  }
  verSalida1(mensaje: string) {
    console.log("salida1:", mensaje);
  }
}
