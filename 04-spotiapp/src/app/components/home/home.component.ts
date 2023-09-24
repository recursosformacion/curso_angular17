import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  indicadorError: boolean;
  mensajeError: string = '';

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.indicadorError = false;
    this.spotify.getNewRelease()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (reject: any) => {
        this.loading = false;
        this.indicadorError = true;
        this.mensajeError = reject.error.error.message;
      });

  }

  ngOnInit() {
  }

}
