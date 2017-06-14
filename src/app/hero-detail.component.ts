import {Component, Input} from '@angular/core';
import { Hero } from './hero';

//@Component is known as a decorator
@Component({
  /*selector is a CSS selector. hero-detail refers to the <hero-detail>
  tag in this component's parent component*/
  selector: 'hero-detail',
  template: `
    <div id="details" *ngIf="hero">
      <h2>{{hero.name}} details</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})


/*Always export the component class because you'll always import
 it elsewhere. You make this component class available elsewhere by
exporting it.*/
export class HeroDetailComponent {
  @Input()hero: Hero;
}
