import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({ //a Decorator, adding metadata. Decorators always come with ().
  styleUrls: ['./app.component.css'],
  /*According to selector, an instance of AppComponent will
  be placed wherever the 'my-app' tag is found. This is Bootstrapping.*/
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
    <h2>Hero List</h2>

    <ul class="heroes">
      <li *ngFor="let hero1 of heroed" (click)="onSelect(hero1)"
      [class.selected]="hero1 === selectedHero">
        <span class="badge">{{hero1.id}}: </span>{{hero1.name}}
      </li>
    </ul>
    <!--[hero] is a property of HeroDetailComponent-->
    <hero-detail [hero2]="selectedHero"></hero-detail>
    `,
    //To teach the injector how to make a HeroService
    providers: [HeroService]
})

export class AppComponent {

  title = 'Superhero DB';
  heroes: Hero[];//uninitialized heroes property
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
    creates an AppComponent.*/
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  /*The onSelect method sets the selectedHero property to whatever the user selected.
  'hero1' is the property, the 'Hero' class is the type. So 'hero1' expects to get a name
  and an id. These are then transferred to selectedHero*/
  onSelect(hero1: Hero): void {
    this.selectedHero = hero1;
  }

}
