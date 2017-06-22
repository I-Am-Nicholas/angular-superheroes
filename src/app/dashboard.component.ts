import { Component, OnInit} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  /*This tells the template that it can manipulate 'heroes' and that it is an instance
  of Hero, and that it will be an array.*/
  heroes: Hero[] = [];
  //constructing a new instance of HeroService
  constructor(private heroService: HeroService) { }
  /*On initialization, take the instance created above and call
  its getHeroes method. On resolution of the promise, return
  elements 1 thru 4 of the array.*/
  ngOnInit(): void {
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.slice(0, 4));
  }
}
