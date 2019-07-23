import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesManagerService {
  heroes: Array<Hero> = [];
  constructor() { 
    let hero1: Hero = {id: 1,alias: 'Superman',skills: 'Vuela, tiene laser en los ojos, congela con el aliento, super fuerza'};
    let hero2: Hero = {id: 2,alias: 'Spiderman',skills: 'Lanza telas de araña'};
    let hero3: Hero = {id: 3,alias: 'Batman',skills: 'Tiene mucho dinero'};
    this.addHeroes([hero1,hero2,hero3]);
  }

  addHeroes(heroes:Array<Hero>){
    this.heroes.push(...heroes);
  }

  getHeroes(){
    return this.heroes;
  }

  modifyHero(hero:Hero){
    this.heroes.forEach(function(oldHero){
      oldHero.alias = hero.id === oldHero.id ? hero.alias : oldHero.alias;
    });
  }
  
}
