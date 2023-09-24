import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListUsuariosProxyService {

  API_URL = `https://api.github.com/users`;
  
  constructor(private http: HttpClient) { }
 
  getUsers(): Observable<any> {
    console.log('Pidiendo....',this.API_URL);
    return this.http.get(this.API_URL);
  }
}
