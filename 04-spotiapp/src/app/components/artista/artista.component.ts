import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  id: any;
  loading: boolean = false;
  artista: any = '';
  topTracks: any[] = [];

  constructor(private spotify: SpotifyService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
      this.getArtista(this.id);
      this.getTopTracks(this.id);
    })
  }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe((data: any) => {
        console.log(data);
        this.artista = data;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => this.topTracks = topTracks);
  }
}
