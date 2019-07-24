import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroesManagerService } from '../heroes-manager.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Array<Hero> = [];
  @Output() shouldShowDetails = new EventEmitter();
  @Input() heroForDetail: Hero;
  // @Input() heroSelected: Event;


  constructor(protected serviceHeroes: HeroesManagerService) { 
    this.heroes = this.serviceHeroes.heroes;
  }
  
  ngOnInit() {  }

  addHero(){
    alert("No Implementado");
    // this.heroes.push(hero);
  }

  deleteHero(hero:Hero){
    this.serviceHeroes.deleteHero(hero);
  }

  showDetailsOf(hero:Hero){
    this.heroForDetail = hero;
    this.shouldShowDetails.emit(hero);
  }


  heroChanged(ev:Event){
    // this.serviceHeroes.modifyHero(<Hero><unknown>ev);
    this.heroForDetail = undefined;
  }
}
