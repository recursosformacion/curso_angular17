import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Preparando Spotify');
  }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD828dIWoR9gwmok7-NLVpttCNRN1NRcrXXvmIhW1fGz0MaALg0eU2VrzBQp9E6o778aVn2god5GRoJG7c'
    })

    return this.http.get(url, { headers });

  }
  getNewRelease() {

    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => {
        return data.albums.items;
      }))

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }))

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);

  }
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=es`)
     .pipe(map((data: any) => data.tracks));


  }

}
