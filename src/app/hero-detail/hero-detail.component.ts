import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Output() details = new EventEmitter();
  @Input() heroForDetail: String;

  constructor() { }

  ngOnInit() {
  }

  volver(){
    this.details.emit();
  }
}
