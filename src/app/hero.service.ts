import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// @Injectable()//Not in use as yet, but ready for future dependencies.
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 5 second delay
      setTimeout(() => resolve(this.getHeroes()), 5000);
    });
  }

}
