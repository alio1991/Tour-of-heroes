import { Component, ViewChild, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './hero';
import { HeroesManagerService } from './heroes-manager.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input() details: Boolean;
  title:String = 'HEROES MANAGER';
  @Input() heroSelected: Event;
  @ViewChild(HeroesComponent, {static: false}) heroesComponent: HeroesComponent;

  constructor(protected serviceHeroes: HeroesManagerService){  }

  ngOnInit() {    }
   
   showDetails(ev:Event){
    this.heroSelected = ev ? ev : undefined;
    this.details = !this.details;
  }

  heroChanged(ev:Event){
    this.showDetails(ev);
    this.heroSelected = ev;
    this.serviceHeroes.modifyHero(<Hero><unknown>ev);
  }
  
}
