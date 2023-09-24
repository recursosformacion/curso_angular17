import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeerPaisService } from '../../leer-pais.service';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit, OnDestroy {

  controlLeer: Subscription;
  paises:any[];

  constructor(private leer : LeerPaisService) { }

  ngOnInit() {
    this.controlLeer = this.leer.leerApi()
          .subscribe((data:any[]) => {
            console.log(data);
            this.paises = data.filter(pais => pais.population > 15000000)
          })

  }

  ngOnDestroy() {
    this.controlLeer.unsubscribe();
  }

}
