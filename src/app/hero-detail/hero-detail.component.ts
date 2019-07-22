import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Output() shouldShowDetails = new EventEmitter();
  @Input() heroForDetail: Hero;

  constructor() { }

  ngOnInit() {
  }

  volver(){
    this.shouldShowDetails.emit();
  }
}
