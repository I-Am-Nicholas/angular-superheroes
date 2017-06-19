import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; //Stack Overflow
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

describe('DashboardComponent', () => {

    let comp:    DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let dbug:      DebugElement;
    let elem:      HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        declarations: [ DashboardComponent ],
        providers: [ HeroService ]
      });

      fixture = TestBed.createComponent(DashboardComponent);

      comp = fixture.componentInstance;

      dbug = fixture.debugElement.query(By.css('h3'));
      elem = dbug.nativeElement;
    });

    it('shows the correct title', () => {
      expect(elem.textContent).toContain('MOST ACTIVE');
    });











  });
