import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  /*selector is a CSS selector. hero-detail refers to the <hero-detail>
  tag in this component's parent component...app.component.ts*/
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

/*Always export the component class because you'll always import
 it elsewhere. You make this component class available elsewhere by
exporting it.*/
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
  }

// one step back in browser history
  goBack(): void {
    this.location.back();
  }

}
