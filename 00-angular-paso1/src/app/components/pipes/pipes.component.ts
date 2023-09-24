import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

  public numerico: number = 12345.6;
  public cadena: string = "Esto es cadena";
  public fecha : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
