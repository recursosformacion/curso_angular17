import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  numero:number=0;

  suma() : void{
    ++this.numero
  }
  resta() : void{
    --this.numero
  }
}
