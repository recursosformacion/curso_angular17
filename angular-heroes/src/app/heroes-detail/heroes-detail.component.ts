import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from "../modelos/hero";
import { HeroService } from '../servicios/hero.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})


export class HeroesDetailComponent {

  hero: Hero = { id: 0, name: '' };

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService

  ) { }
  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroService.getHero(id);
  }
}
