import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeerPaisService {
  API_URL: string = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http: HttpClient) { }

  leerApi(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  
}
