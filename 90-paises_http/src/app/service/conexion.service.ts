import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  // tslint:disable-next-line: no-inferrable-types
  API_URL: string = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http: HttpClient) { }

  leerApi(): Observable<any> {
    return this.http.get(this.API_URL).pipe(share());
  }
}
