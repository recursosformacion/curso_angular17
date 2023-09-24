import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AlmacenService } from '../../service/almacen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  suscripcion:Subscription;
  alerta = "alert-danger";
  loading = false;
  paraSalida;

  propiedades: Object = {
    danger: true
  }

  constructor(private conectar: AlmacenService) { }

  ngOnInit() {
    this.suscripcion=this.conectar.datasource$.subscribe(dato => {
      console.log(dato);
      this.paraSalida = dato.join("/");
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscripcion.unsubscribe();
  }

  

  ejecutar() {
    this.loading = true;
    setTimeout(() => this.loading = false, 4000);
  }
}
