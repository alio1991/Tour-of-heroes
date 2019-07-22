import { Component, ViewChild, Input } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './hero';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input() details: Boolean;
  title:String = 'HEROES MANAGER';
  @Input() heroSelected: Event;

  constructor(){  }

  ngOnInit() {    }
   
   showDetails(ev:Event){
    this.heroSelected = ev ? ev : undefined;
    this.details = !this.details;
  }
  
}
