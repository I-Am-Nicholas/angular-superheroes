import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

heroes: Hero[] = [];
//constructing a new instance of HeroService
  constructor(private heroService: HeroService, private sanitizer: DomSanitizer) { }
/*On initialization, take the instance created above and call
its getHeroes method. On resolution of the promise, return
elements 1 thru 5 of the array.*/
  ngOnInit(): any {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
      // return this.sanitizer.bypassSecurityTrustUrl('assets/shield.png');
  }

}
