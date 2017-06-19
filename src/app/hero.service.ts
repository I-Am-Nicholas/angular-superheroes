import { Injectable } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  constructor(private sanitizer: DomSanitizer) { }


  getHero(id: number): Promise<Hero> {//when given an id...
    return this.getHeroes()//...gets the array of HEROES...
    .then(heroes => heroes.find(hero => hero.id === id));//...then finds the hero within whose id matches given id
  }


  //returns the array of HEROES
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // getStyle() {
  //   // console.log(this.getHero)
  //   var logo = ;
  //   var style = `background-image: url(${logo})`;
  //  return this.sanitizer.bypassSecurityTrustStyle(style);
  // }
}
