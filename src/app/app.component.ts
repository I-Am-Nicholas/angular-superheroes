import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id: 10, name: 'Spider-man'},
  {id: 11, name: 'Hawkeye'},
  {id: 12, name: 'Hulk'},
  {id: 13, name: 'Captain America'},
  {id: 14, name: 'Scarlet Witch'},
  {id: 15, name: 'Iron Man'},
  {id: 16, name: 'Black Panther'},
  {id: 17, name: 'Thor'},
  {id: 18, name: 'Black Widow'}
];

@Component({
  styleUrls: ['./app.component.css'],
  selector: 'app-root',
  template:`
  <h1>{{title}}</h1>
    <h2>Hero List</h2>

    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}: </span>{{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `
})

export class AppComponent {
  /*The onSelect method sets the selectedHero property to whatever the user selected.*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /*master/detail UI pattern...list/selected hero, respectively.*/
  /*selectedHero is a property of AppComponent. At this point, Hero has no value.
    It will recieve its value once the user selects from the list. */
  selectedHero: Hero;
  title = 'Superhero DB';
  heroes = HEROES;//A public property, xposing the heroes list for binding to a template element.
}
