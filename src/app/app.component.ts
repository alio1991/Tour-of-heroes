import { Component, ViewChild, Input } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Hero } from './hero';
import { HeroesManagerService } from './heroes-manager.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title:String = 'HEROES MANAGER';

  constructor(protected serviceHeroes: HeroesManagerService){  }
  ngOnInit() {    }
}
