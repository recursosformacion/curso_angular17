import { Injectable } from '@angular/core';
import {HEROES} from "../modelos/mock-heroes";
import { Hero } from '../modelos/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Hero[]{
    return HEROES;
  }
  getHero(id:number): Hero{   
    for (let hero of HEROES){
      if (hero.id == id){
        return hero;
      }
    }
    return {id:0,name:''};
    
  }
}
