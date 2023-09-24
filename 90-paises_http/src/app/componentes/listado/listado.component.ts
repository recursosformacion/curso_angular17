import { Component } from '@angular/core';
import { ConexionService } from '../../service/conexion.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent  {
 
  paises: any[] = [];
  otraforma: Observable<any>;

  constructor(private conexion: ConexionService) {
    const dato: Observable<any> = this.conexion.leerApi();

    console.log("entro en listado");
    dato.subscribe((resp: any) => {
      this.paises = resp;
      console.log(resp);
    })


    // this.otraforma = dato.pipe(
    //   tap(d => console.log(d)),
    //   map((response: Response) => response.json()),
    //   tap(d => console.log(d))
    // );
    // console.log('otraforma-', this.otraforma)
    }
  }
    


