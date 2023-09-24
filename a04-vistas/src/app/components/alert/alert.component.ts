import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <h1 (click)="alert()">{{type}}</h1>
  `,
})
export class AlertComponent {
  @Input() type: string = 'success';

  alert() {
    console.log('alert');
  }
}
