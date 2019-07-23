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

  constructor(protected serviceHeroes: HeroesManagerService) { 
    this.heroes = this.serviceHeroes.heroes;
  }
  
  ngOnInit() {  }

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
