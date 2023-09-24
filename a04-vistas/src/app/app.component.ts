import { Component, ViewChildren, QueryList, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .unaClase {
    background-color:blue;
  }
  `]
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  @ViewChildren('[ngClass]') dire: QueryList<any>;
  @ViewChildren('dato') dato: QueryList<ElementRef>;
  


  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => {
      alertInstance.type = 'Cambiado';
      console.log(alertInstance);
    });

    this.dato.forEach(elDato => console.log(elDato.nativeElement.innerHTML));

    console.log(this.dire);
    
    this.dire.forEach(div => console.log(div));
  }
}
