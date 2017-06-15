import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 10, name: 'Spider-Man'},
  {id: 11, name: 'Hawkeye'},
  {id: 12, name: 'Hulk'},
  {id: 13, name: 'Captain America'},
  {id: 14, name: 'Scarlet Witch'},
  {id: 15, name: 'Iron Man'},
  {id: 16, name: 'Black Panther'},
  {id: 17, name: 'Thor'},
  {id: 18, name: 'Black Widow'},
  {id: 19, name: 'Vision'},
  {id: 20, name: 'Ant-Man'}
];

@Component({ //a Decorator, adding metadata
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
    `
})

export class AppComponent {
  /*master/detail UI pattern == list/selected hero, respectively.*/
  /*selectedHero is a property, created here. 'Hero' is its type. It
  therefore expects a 'name' and an 'id'*/
  selectedHero: Hero;
  /*The onSelect method sets the selectedHero property to whatever the user selected.
  'hero1' is the property, the 'Hero' class is the type. So 'hero1' expects to get a name
  and an id. These are then transferred to selectedHero*/
  onSelect(hero1): void {
    this.selectedHero = hero1;
  }

  title = 'Superhero DB';
  heroed = HEROES;/*A public property, xposing the heroes list for
  binding to a template element. So 'heroes' now gives accees to the HEROES
  constant, (which was previously private)*/
}
