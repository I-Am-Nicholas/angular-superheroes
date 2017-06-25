import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; //Stack Overflow
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';


import { Subject } from 'rxjs/Subject';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let comp:    AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let dbug:      DebugElement; //access to the DOM
    let elem:      HTMLElement;
    // let page: Page;


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],//Stack Overflow
        declarations: [ AppComponent ] // always declare the component under test here
      });

      fixture = TestBed.createComponent(AppComponent);

      comp = fixture.componentInstance; // AppComponent test instance

      // query for the title <h1> by CSS element selector
      dbug = fixture.debugElement.query(By.css('nav'));
      elem = dbug.nativeElement;
    });


  it('should create the app', async(() => {
    expect(AppComponent).toBeTruthy();
  }));

  it(`should show correct title`, async(() => {
    fixture.detectChanges();
    var hDbug = fixture.debugElement.query(By.css('h1'));
    expect(hDbug.nativeElement.textContent).toEqual(comp.title);
  }));

  it(`should show altered title`, async(() => {
    comp.title = "New Title";
    fixture.detectChanges();
    var hDbug = fixture.debugElement.query(By.css('h1'));
    expect(hDbug.nativeElement.textContent).toEqual(comp.title);
  }));

  it('should render text of nav tag', async(() => {
    fixture.detectChanges();
    expect(elem.textContent).toContain('Dashboard');
  }));

  it('should render text of nav tag', async(() => {
    fixture.detectChanges();
    expect(elem.textContent).toContain('Heroes');
  }));

  it('should change bg color on hover', async(() => {
    dbug.dispatchEvent(newEvent('hover'));
    expect(dbug.nativeElement.backgroundColor).toEqual('#eee');
  }));

});
