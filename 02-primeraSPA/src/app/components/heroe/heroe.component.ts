import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'

})
export class HeroeComponent implements OnInit {

  numHeroe: number;
  heroe: any;

  constructor(private _heroesService: HeroesService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      this.numHeroe = params.id;
      this.heroe = this._heroesService.getHeroe(this.numHeroe);
    })
  }

  ngOnInit() {
  }

}
