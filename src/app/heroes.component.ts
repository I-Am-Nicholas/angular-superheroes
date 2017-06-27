import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({ //a Decorator, adding metadata. Decorators always come with ().
  /*According to selector, an instance of AppComponent will
  be placed wherever the 'my-app' tag is found. This is Bootstrapping.*/
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{

  heroes: Hero[];//uninitialized heroes property (an instance of Hero...but as an array?)
  /*A public property, xposing the heroes list for
  binding to a template element. So 'heroes' now gives accees to the HEROES
  constant, (which was previously private)*/

  /*master/detail UI pattern == list/selected hero, respectively.*/
  /*selectedHero is a property, created here. 'Hero' is its type. It
  therefore expects a 'name' and an 'id'*/
  selectedHero: Hero;

  /*The below is a Dependency Injection. The constructor itself does nothing. The parameter simultaneously
  defines a private heroService property and identifies it as a HeroService
   injection site.

   Now Angular knows to supply an instance of the HeroService when it
    creates an AppComponent.
    That instance will set up the return of the list of heroes from mock-heroes.
    The constructor is only for simple initializations, like wiring constructor
    parameters to properties.*/
  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }
// ) { console.log(heroService.getHeroes()) }

  getTheHeroes(): void {
    /*the following arrow function is an implementation of ES2015
    */
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
      /* above line == this.heroService.getHeroes().then (function(heroes){
      this.heroes = heroes;
    });*/
  }

  /*The onSelect method sets the selectedHero property to whatever the user selected.
  'hero' is the property, the 'Hero' class is the type. So 'hero' expects to get a name
  and an id and a logo. These are then transferred to selectedHero*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /*ngOnInit is a Lifecycle hook. Angular offers a handful of hooks (interfaces)
  which allow you to view a component at a certain stage in its existence. The names
  of these hooks are self-explanatory. ngOnDestroy, ngOnChange, etc.

  In this instance, on initialization of the component, Angular is asked to call
   the getHeroes function*/
  ngOnInit(): void {
    this.getTheHeroes();
  }

  gotoDetail(): void {
   this.router.navigate(['/detail', this.selectedHero.id]);
 }

}
