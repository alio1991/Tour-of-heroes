import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesManagerService {
  heroes: Array<Hero> = [];
  top: Array<Hero> = [];

  constructor() { 
    let hero1: Hero = {id: 1, score: 8, alias: 'Superman', skills: 'Vuela, tiene laser en los ojos, congela con el aliento, super fuerza'};
    let hero2: Hero = {id: 2, score: 7, alias: 'Spiderman', skills: 'Lanza telas de araña'};
    let hero3: Hero = {id: 3, score: 5, alias: 'Batman', skills: 'Tiene mucho dinero'};
    let hero4: Hero = {id: 4, score: 6, alias: 'Hulk', skills: 'Super fuerza'};
    let hero5: Hero = {id: 5, score: 6, alias: 'Iron Man', skills: 'Tiene muchiiiisimo dinero'};
    let hero6: Hero = {id: 6, score: 10, alias: 'Thor', skills: 'Es un Dios'};
    this.addHeroes([hero1,hero2,hero3,hero4,hero5,hero6]);
  }

  addHeroes(heroes:Array<Hero>){
    this.heroes.push(...heroes);
  }

  getHeroes(){
    return this.heroes;
  }

  getTop(){
    this.heroes.sort(function(a, b) {
      return a.score-b.score;
    });
    this.top = [...this.heroes];
    return this.top.splice(3);
  }

  modifyHero(hero:Hero){
    this.heroes.forEach(function(oldHero){
      oldHero.alias = hero.id === oldHero.id ? hero.alias : oldHero.alias;
    });
  }
  
}
