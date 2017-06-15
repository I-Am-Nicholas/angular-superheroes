import {Component, Input} from '@angular/core';
import { Hero } from './hero';

//@Component is known as a decorator. Decorators always come with ().
@Component({
  /*selector is a CSS selector. hero-detail refers to the <hero-detail>
  tag in this component's parent component*/
  selector: 'hero-detail',
  template: `
  <!--a.k.a 'if hero is defined(selected), then execute the following
   lines and print them between the main component template's
   'hero-detail' tags'-->
    <div id="details" *ngIf="hero2">
      <h2>{{hero2.name}} details</h2>
      <div><label>id: </label>{{hero2.id}}</div>
      <div>
        <label>name: </label>
        <!--[(ngModel)] Creates two-way binding between the <input> form (the
        textbox)element and the hero.name property-->
        <input [(ngModel)]="hero2.name" placeholder="name">
      </div>
    </div>
  `
})


/*Always export the component class because you'll always import
 it elsewhere. You make this component class available elsewhere by
exporting it.*/
export class HeroDetailComponent {
  /*From a binding perspective hero would be untouchable (private)
  if not for the @Input decorator. So here, 'hero', an instance of the
  Hero class, can be bound*/
  @Input()hero2: Hero;
}
