import { Component } from '@angular/core';
import {Hero} from '../modelos/hero';
import { HeroService } from '../servicios/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  

  heroes?: Hero[];

  constructor(private heroService:HeroService){}

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

 
}
