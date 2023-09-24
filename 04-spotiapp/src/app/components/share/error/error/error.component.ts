import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styles: []
})
export class ErrorComponent {

  @Input() indicadorError: boolean;
  @Input() mensajeError: string;

  constructor() { }

 

}
