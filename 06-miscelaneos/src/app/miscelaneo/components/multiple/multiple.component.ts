import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple',
  template: `
    <p>
      multiple works! con {{ mensaje }}
    </p>
  `,
  styles: []
})
export class MultipleComponent implements OnInit {

  @Input('men') mensaje:string;

  @Output() salida: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.salida.emit("Esto es la salida");
  }

}
