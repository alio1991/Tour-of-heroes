import { Component, ViewChild, Input } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Input('detail') det: Boolean;
  title:String = 'HEROES MANAGER';
  @Input() heroForDetailA: String;

  constructor(){  }

  ngOnInit() {    }
   
   showDetails(ev:Event){
    this.heroForDetailA = ev ? ev.toString() : "";
    this.det = !this.det;
  }
  
}
