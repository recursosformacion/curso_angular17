import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `div {
      background:red;
    }`
  ]
})
export class HeaderComponent implements OnInit {

  private miNombre: string = " Miguel";

  constructor() { }

  ngOnInit() {
  }

}
