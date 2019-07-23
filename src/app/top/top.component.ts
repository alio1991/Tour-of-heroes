import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesManagerService } from '../heroes-manager.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  heroes: Array<Hero> = [];
  constructor(protected serviceHeroes: HeroesManagerService) {
    this.heroes = serviceHeroes.getTop();
   }

  ngOnInit() {
  }

}
