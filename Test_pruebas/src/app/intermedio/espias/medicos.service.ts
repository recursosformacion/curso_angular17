import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: Http ) { }

  getMedicos() {
    return this.http.get('...')
                .pipe(map( resp => resp['medicos'] ));
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico )
                .pipe(map( resp => resp['medico'] ));
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' )
                .pipe(map( resp => resp['medico'] ));
  }


}
