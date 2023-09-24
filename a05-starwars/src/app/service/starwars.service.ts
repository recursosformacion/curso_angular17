import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

 // import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
 httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'authkey',
    'userid': '1'
  })
};

URL_API: string = 'http://swapi.co/api/';

constructor(private http: HttpClient) { }


getData(tipo ?: string, id ?: number): Observable < any > {
  let apiurl = this.URL_API;
  if(tipo) {
    apiurl += tipo + '/';
  }
    if(id) {
    apiurl += id;
  }
    apiurl += '?format=json';
    console.log(apiurl);

  return this.http.get(apiurl,this.httpOptions)
   .pipe(
      tap(d => console.log(d)),
      map((response: Response) => response.json())
    );
}



  // public getCharacter(id: number): Observable<StarWarsCharacter> {
  //   return this.http.get('https://swapi.co/api/people/' + id)
  //     .pipe(
  //       map((response: Response) => response.json())
  //     );
  // }
}
