import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Superhero DB';

}
