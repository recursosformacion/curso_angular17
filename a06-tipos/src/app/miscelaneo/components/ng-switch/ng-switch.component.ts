import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  muestra: number = 0;
  posi: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  proximo: string;
  alerta: string ;

  constructor() {
    this.alerta = this.posi[this.muestra];
    this.proximo = this.posi[this.muestra + 1];
  }

  ngOnInit() {
  }

  cambiaVis() {
    console.log(this.alerta);
    this.muestra = this.muestra + 1;
    this.alerta = this.posi[this.muestra];
    if (this.muestra === this.posi.length) {
      this.muestra = -1;
    }

    this.proximo = this.posi[this.muestra + 1];
  }


}
