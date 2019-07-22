import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero> = [];
  @Output() shouldShowDetails = new EventEmitter();

  constructor() { 
    let hero1: Hero = {id: 1,alias: 'Superman',skills: 'Volar'};
    let hero2: Hero = {id: 2,alias: 'Spiderman',skills: 'Lanza telas de araña'};
    let hero3: Hero = {id: 3,alias: 'Batman',skills: 'Tiene mucho dinero'};
    this.addHeroes([hero1,hero2,hero3]);
  }
  
  ngOnInit() {  }

  addHeroes(heroes:Array<Hero>){
    this.heroes.push(...heroes);
  }

  addHero(hero:Hero){
    this.heroes.push(hero);
  }

  deleteHero(hero:Hero){
    this.heroes.unshift(hero);
  }

  showDetails(hero:Hero){
    this.shouldShowDetails.emit(hero);
  }
}
